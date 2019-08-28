import random from './../../src/utils/random.js';

describe('random', () => {
  it('should return a random value between a range', () => {
    const actual = random(-1, 1);
    expect(actual).toBeGreaterThanOrEqual(-1);
    expect(actual).toBeLessThanOrEqual(1);
  });

  it('should return a random value between 0 and 1 if no args', () => {
    const actual = random();
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(1);
  });
}); 