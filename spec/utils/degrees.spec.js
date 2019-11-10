import degrees from './../../src/utils/degrees.js';

describe('degrees', () => {
  it('should convert value to degrees', () => {
    const actual = degrees(10);
    expect(actual).toBeCloseTo(572.958040701955);
  });
}); 