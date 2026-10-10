
import storage from "./storage.js";
import { ALARM } from "../General/generalVariables.js";

const contextLoader = {

// To load something from local storage via the safe wrapper
 loadLocalStorage: (nameItem: string, defaultValue: any) => {
  return storage.get(nameItem, defaultValue);
},

selectImage: (img1: string, img2: string) => {
  if (
    window.innerWidth >= 525 &&
    window.innerWidth >= window.innerHeight * 1.05
  ) {
    return img1;
  }
  return img2;
},

 selectLoadLocalStogare: (mainLoalStorage: string, alternativaLocalStorage: string) => {
  if (
    window.innerWidth >= 525 &&
    window.innerWidth >= window.innerHeight * 1.05
  ) {
    return mainLoalStorage;
  }

  return alternativaLocalStorage;
}
}

export default contextLoader;