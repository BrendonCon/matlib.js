export default (x, min, max) => {
  return Math.min(Math.max(x, min), max);
};