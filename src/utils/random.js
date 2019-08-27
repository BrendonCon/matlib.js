import lerp from './lerp.js';

export default (min = 0, max = 1) => {
  return lerp(min, max, Math.random());
};