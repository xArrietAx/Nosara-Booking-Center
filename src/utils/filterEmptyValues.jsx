export const filterEmptyValues = (obj) => {
    const filtered = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (
          value !== "" &&
          value !== null &&
          value !== undefined &&
          value !== 0
        ) {
          filtered[key] = value;
        }
      }
    }

    return filtered;
  };
