export default (u, v) => {
  let alpha = 0;

  for (const key of Object.keys(u)) {
    alpha += u[key] * v[key];
  }

  return alpha;
};