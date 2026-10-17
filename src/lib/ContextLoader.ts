
// Internal Tools & Utilities
import { heightFixxr, smallScreen } from "../General/generalVariables.js";
import storage from "./storage.js";

const contextLoader = {

// To load something from local storage via the safe wrapper
 loadLocalStorage: <T,>(nameItem: string, defaultValue: T): T => {
  return storage.get(nameItem, defaultValue);
},

selectImage: (img1: string, img2: string) => {
  if (
    window.innerWidth >= smallScreen &&
    window.innerWidth >= window.innerHeight * heightFixxr
  ) {
    return img1;
  }
  return img2;
},

 selectLoadLocalStogare: (mainLoalStorage: string, alternativaLocalStorage: string) => {
  if (
    window.innerWidth >= smallScreen &&
    window.innerWidth >= window.innerHeight * heightFixxr
  ) {
    return mainLoalStorage;
  }

  return alternativaLocalStorage;
}
}

export default contextLoader;