export default (u, v) => {
  return Object.keys(u)
    .map(key => u[key] * v[key])
    .reduce((a, b) => a + b);
};