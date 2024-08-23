export function renameProp(obj, keyToRemove, newKey) {
  
  if (obj.hasOwnProperty(keyToRemove) && keyToRemove !== newKey) {
    Object.defineProperty(
      obj,
      newKey,
      Object.getOwnPropertyDescriptor(obj, keyToRemove)
    );

    delete obj[keyToRemove];
  }
}