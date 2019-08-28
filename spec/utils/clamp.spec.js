import clamp from './../../src/utils/clamp.js';

describe('clamp', () => {
  it('should clamp the value correctly to the maximum', () => {
    const actual = clamp(100, 10, 50);
    expect(actual).toBe(50);
  });

  it('should clamp the vlaue correctly to the minimum', () => {
    const actual = clamp(5, 10, 50);
    expect(actual).toBe(10);
  });
}); 