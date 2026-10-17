// Third-Party & Ecosystem Imports
import storeLib from "store";


// Wrapper that delegates to `store` package (synchronous) with a localStorage fallback.
function get<T>(key: string, defaultValue: T): T;
function get<T = unknown>(key: string): T;
function get<T = unknown>(key: string, defaultValue?: T): T {
  try {
    if (storeLib && typeof storeLib.get === "function") {
      const value = storeLib.get(key);
      return value === undefined ? (defaultValue as T) : value;
    }
  } catch (e) {
    console.warn("store.get failed, falling back to localStorage", e);
  }

  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === undefined) return defaultValue as T;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return raw as unknown as T;
    }
  } catch (e) {
    console.warn("storage.get fallback failed for", key, e);
    return defaultValue as T;
  }
}

const storage = {
  get,
  set: (key: string, value: unknown) => {
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
  remove: (key: string) => {
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
