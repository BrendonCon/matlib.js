import map from './../../src/utils/map.js';

describe('map', () => {
  it('should map values from one range to another', () => {
    const actual = map(50, 0, 100, 500, 1000);
    expect(actual).toBe(750);
  });
}); 