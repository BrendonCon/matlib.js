import random from './random.js';

export default (min = 0, max = 1) => {
  return random(min, max) | 0;
};