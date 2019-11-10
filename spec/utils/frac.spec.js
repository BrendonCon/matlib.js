import frac from './../../src/utils/frac.js';

describe('frac', () => {
  it('should return the fractional value', () => {
    const actual = frac(100.12345);
    expect(actual).toBeCloseTo(0.12345);
  });

  it('should return 0 if no fraction is found', () => {
    const actual = frac(500);
    expect(actual).toBe(0);
  });
}); 