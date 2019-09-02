import distance from './../../src/utils/distance.js';

describe('distance', () => {
  const p1 = {
    x: 3,
    y: 4
  };

  const p2 = {
    x: 6,
    y: 8
  };

  it('should return the correct distance', () => {
    const actual = distance(p1, p2);
    expect(actual).toBe(5);
  });
}); 