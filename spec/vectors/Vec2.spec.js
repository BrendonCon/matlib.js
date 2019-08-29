import Vec2 from './../../src/vectors/Vec2.js';

describe('Vec2', () => {
  let sut;

  beforeEach(() => {
    sut = new Vec2(100, 50);
  });

  describe('set', () => {
    beforeEach(() => {
      sut.set(30, 50);
    });
    
    it('should set the x and y components of the vector', () => {
      expect(sut.x).toBe(30);
      expect(sut.y).toBe(50);
    });
  });

  describe('add', () => {
    beforeEach(() => {
      sut.add({ x: 20, y: 50 });
    });

    it('should add to the vector correctly', () => {
      expect(sut.x).toBe(120);
      expect(sut.y).toBe(100);
    });
  });

  describe('sub', () => {
    beforeEach(() => {
      sut.sub({ x: 20, y: 50 });
    });

    it('should subtract from the vector correctly', () => {
      expect(sut.x).toBe(80);
      expect(sut.y).toBe(0);
    });
  });

  describe('mult', () => {
    beforeEach(() => {
      sut.mult(2);
    });

    it('should multiply the vector by a scalar', () => {
      expect(sut.x).toBe(200);
      expect(sut.y).toBe(100);
    });
  });

  describe('div', () => {
    beforeEach(() => {
      sut.div(10);
    });

    it('should divide each component of the vector by the divisor', () => {
      expect(sut.x).toBe(10);
      expect(sut.y).toBe(5);
    });
  });

  describe('zero', () => {
    beforeEach(() => {
      sut.zero();
    });

    it('should each component of the vector to 0', () => {
      expect(sut.x).toBe(0);
      expect(sut.y).toBe(0);
    });
  });

  describe('negate', () => {
    beforeEach(() => {
      sut.negate();
    });

    it('should negate each component of the vector', () => {
      expect(sut.x).toBe(-100);
      expect(sut.y).toBe(-50);
    });
  });

  describe('one', () => {
    beforeEach(() => {
      sut.one();
    });

    it('should set each component of the vector to 1', () => {
      expect(sut.x).toBe(1);
      expect(sut.y).toBe(1);
    });
  });

  describe('toArray', () => {
    it('should return an array of the vectors components', () => {
      const actual = sut.toArray();
      expect(actual[0]).toBe(100);
      expect(actual[1]).toBe(50);
    });
  });

  describe('toString', () => {
    it('should return a string version of the vector', () => {
      const actual = sut.toString();
      const expected = `Vec2: { x: 100, y: 50 }`;
      expect(actual).toBe(expected);
    });
  });

  describe('copy', () => {
    it('should a copy of the vector', () => {
      const actual = sut.copy();
      expect(actual).not.toBe(sut);
    });
  });

  describe('equals', () => {
    const v = { x: 100, y: 50 };
    const u = { x: 10, y: 1 };

    it('should return true if they are equal vectors', () => {
      const actual = sut.equals(v);
      expect(actual).toBeTruthy();
    });

    it('should return false if they are not equal vectors', () => {
      const actual = sut.equals(u);
      expect(actual).toBe(false);
    });
  });
}); 