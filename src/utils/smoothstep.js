import clamp from './clamp.js';
import normalize from './normalize.js';

export default (x, edge0, edge1) => {
  const alpha = clamp(normalize(x, edge0, edge1), 0, 1);
  return alpha * alpha * (3.0 - 2.0 * alpha);
};