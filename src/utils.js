export const isEmptyObject = (object) => {
  return Object.keys(object).length === 0;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
