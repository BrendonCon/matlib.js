import dot from './../../src/utils/dot.js';

describe('dot', () => {
  let u, v;

  describe('in 2D', () => {
    beforeEach(() => {
      u = {
        x: 3,
        y: 4
      };
      
      v = {
        x: 1,
        y: 1
      };
    });

    it('should return the dot product of two arbitary vectors', () => {
      const actual = dot(u, v);
      expect(actual).toBe(7);
    });
  });

  describe('in higher dimensions', () => {
    beforeEach(() => {
      u = {
        x: 3,
        y: 4,
        z: 5,
        w: 0
      };
      
      v = {
        x: 1,
        y: 1,
        z: 1,
        w: 0
      };
    });

    it('should return the dot product of two arbitary vectors', () => {
      const actual = dot(u, v);
      expect(actual).toBe(12);
    });
  });
}); 