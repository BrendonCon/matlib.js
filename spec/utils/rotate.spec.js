import rotate from './../../src/utils/rotate.js';

describe('rotate', () => {
  let theta = Math.PI * 0.5;
  let point = {
    x: 1,
    y: 0
  };

  beforeEach(() => {
    rotate(point, theta);
  });

  it('should return the correctly rotated point', () => {
    expect(point.x).toBeCloseTo(0);
    expect(point.y).toBeCloseTo(1);
  });
}); 