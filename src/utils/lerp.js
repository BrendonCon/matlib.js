export default (min, max, normal) => {
  return (max - min) * normal + min;
};