
import storage from "./storage.js";
import { ALARM } from "../General/generalVariables.js";

const contextLoader = {

// To load something from local storage via the safe wrapper
 loadLocalStorage: (nameItem, defaultValue) => {
  return storage.get(nameItem, defaultValue);
},

/* This function makes additionals modifications to the object loaded from local storage based on the feature specified.
- nameItem: The name of the item to load from local storage.
- defaultValue: The default value to return if the item is not found in local storage.
- feature: The feature to check for (in this case, "volume").
- value: The volume value to set for the audio object.
- arrayAudio: An array of audio objects.
*/

InitialObjectFixxer: (nameItem, defaultValue, feature, value, arrayAudio) => {
  let object = contextLoader.loadLocalStorage(nameItem, defaultValue);

  if (feature == ALARM) {
  //arrayAudio[object].audio.volume = value;
    return arrayAudio[object];
  }
  return object;
},

selectImage: (img1, img2) => {
  if (
    window.innerWidth >= 525 &&
    window.innerWidth >= window.innerHeight * 1.05
  ) {
    return img1;
  }
  return img2;
},

 selectLoadLocalStogare: (mainLoalStorage, alternativaLocalStorage) => {
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