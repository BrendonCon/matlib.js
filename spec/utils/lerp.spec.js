import lerp from './../../src/utils/lerp.js';

describe('lerp', () => {
  it('should interpolate values correctly', () => {
    const actual = lerp(100, 200, 0.5);
    expect(actual).toBe(150);
  });
}); 