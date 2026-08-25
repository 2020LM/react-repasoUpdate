// Wrapper that delegates to `store` package (synchronous) with a localStorage fallback.
import storeLib from "store";

const storage = {
  get: (key, defaultValue = null) => {
    try {
      if (storeLib && typeof storeLib.get === "function") {
        const v = storeLib.get(key);
        return v === undefined ? defaultValue : v;
      }
    } catch (e) {
      console.warn("store.get failed, falling back to localStorage", e);
    }

    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw === undefined) return defaultValue;
      try {
        return JSON.parse(raw);
      } catch (e) {
        return raw;
      }
    } catch (e) {
      console.warn("storage.get fallback failed for", key, e);
      return defaultValue;
    }
  },
  set: (key, value) => {
    try {
      if (storeLib && typeof storeLib.set === "function") {
        return storeLib.set(key, value);
      }
    } catch (e) {
      console.warn("store.set failed, falling back to localStorage", e);
    }

    try {
      const toStore = typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, toStore);
    } catch (e) {
      console.warn("storage.set failed for", key, e);
    }
  },
  remove: (key) => {
    try {
      if (storeLib && typeof storeLib.remove === "function") {
        return storeLib.remove(key);
      }
    } catch (e) {
      console.warn("store.remove failed, falling back to localStorage", e);
    }

    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn("storage.remove failed for", key, e);
    }
  },
};

export default storage;
