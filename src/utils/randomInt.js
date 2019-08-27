import random from './random.js';

export default (min, max) => {
  return random(min, max) | 0;
};