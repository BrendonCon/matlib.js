import randomInt from './../../src/utils/randomInt.js';

describe('randomInt', () => {
  it('should return a random value between a range', () => {
    const actual = randomInt(10, 100);
    expect(actual).toBeGreaterThanOrEqual(10);
    expect(Number.isInteger(actual)).toBeTruthy();
    expect(actual).toBeLessThanOrEqual(100);
  });
}); 