import radians from './../../src/utils/radians.js';

describe('radians', () => {
  it('should return radians based off of degree input', () => {
    const actual = radians(90);
    expect(actual).toBeCloseTo(1.5708);
  });
}); 