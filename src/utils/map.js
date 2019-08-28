import normalize from './normalize.js';
import lerp from './lerp.js';

export default (x, startMin, startMax, targetMin, targetMax) => {
  return lerp(targetMin, targetMax, normalize(x, startMin, startMax));
};