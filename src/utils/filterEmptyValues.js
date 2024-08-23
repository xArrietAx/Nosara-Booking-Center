export const filterEmptyValues = (obj) => {
  
  const filtered = {};

  const isEmptyObject = (value) => {
    return typeof value === 'object' && value !== null && Object.keys(value).length === 0;
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (
        value !== "" &&
        value !== null &&
        value !== undefined &&
        !isEmptyObject(value) &&
        value !== 0
      ) {
        filtered[key] = value;
      }
    }
  }

  return filtered;
};
