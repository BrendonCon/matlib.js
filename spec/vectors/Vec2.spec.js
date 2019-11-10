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

  describe('dot', () => {
    it('should return the dot product as a scalar value', () => {
      const actual = sut.dot({ x: 2, y: 3});
      expect(actual).toBe(350);
    });
  });

  describe('cross', () => {
    it('should the psuedo cross product which is a scalar value in 2D', () => {
      const actual = sut.cross({ x: 2, y: 1 });
      expect(actual).toBe(0);
    });
  });

  describe('mag', () => {
    beforeEach(() => {
      sut.set(3, 4);
    });

    it('should return the magnitude of the vector', () => {
      const actual = sut.mag();
      expect(actual).toBe(5);
    });
  });

  describe('magSq', () => {
    beforeEach(() => {
      sut.set(3, 4);
    });

    it('should return the magnitude of the vector squared', () => {
      const actual = sut.magSq();
      expect(actual).toBe(25);
    });
  });

  describe('normalize', () => {
    beforeEach(() => {
      sut.normalize();
    });

    it('should normalize the components of the vector', () => {
      expect(sut.x).toBeLessThanOrEqual(1);
      expect(sut.y).toBeLessThanOrEqual(1);
    });
  });

  describe('dist', () => {
    it('should return the distance between two vectors', () => {
      const actual = sut.dist({ x: 96, y: 47 });
      expect(actual).toBe(5);
    });
  });

  describe('lerp', () => {
    beforeEach(() => {
      sut.lerp({ x: 50, y: 0 }, 0.5);
    });

    it('should linearly interpolate between two vectors', () => {
      expect(sut.x).toBe(75);
      expect(sut.y).toBe(25);
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
  
  describe('abs', () => {
    beforeEach(() => {
      sut.set(-4, -10);
      sut.abs();
    });

    it('should assign the components absolute value', () => {
      expect(sut.x).toBe(4);
      expect(sut.y).toBe(10);
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

  describe('random', () => {
    beforeEach(() => {
      sut.random();
    });

    it('should set each component of the vector to a random flaot between 0 and 1', () => {
      expect(sut.x).toBeGreaterThanOrEqual(0);
      expect(sut.y).toBeGreaterThanOrEqual(0);
      expect(sut.x).toBeLessThanOrEqual(1);
      expect(sut.y).toBeLessThanOrEqual(1);
    });
  });

  describe('limit', () => {
    beforeEach(() => {
      sut.set(100, 50);
      sut.limit(5);
    });

    it('should limit the magnitude of the vector', () => {
      const actual = sut.mag();
      expect(actual).toBeCloseTo(5);
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

  describe('static add', () => {
    const v = { x: 100, y: 50 };
    const u = { x: 10, y: 1 };

    it('should add two vectors correctly', () => {
      const actual = Vec2.add(v, u);
      expect(actual.x).toBe(110);
      expect(actual.y).toBe(51);
    });
  });

  describe('static sub', () => {
    const v = { x: 100, y: 50 };
    const u = { x: 10, y: 1 };

    it('should subtract two vectors correctly', () => {
      const actual = Vec2.sub(v, u);
      expect(actual.x).toBe(90);
      expect(actual.y).toBe(49);
    });
  });

  describe('static mult', () => {
    const v = { x: 100, y: 50 };
    const alpha = 2;

    it('should multiply a vector and scalar correctly', () => {
      const actual = Vec2.mult(v, alpha);
      expect(actual.x).toBe(200);
      expect(actual.y).toBe(100);
    });
  });

  describe('static div', () => {
    const v = { x: 100, y: 50 };
    const alpha = 2;

    it('should divide a vectors by a scalar correctly', () => {
      const actual = Vec2.div(v, alpha);
      expect(actual.x).toBe(50);
      expect(actual.y).toBe(25);
    });
  });

  describe('static left', () => {
    it('should return a left facing vector', () => {
      const actual = Vec2.left();
      expect(actual.x).toBe(-1);
      expect(actual.y).toBe(0);
    });
  });

  describe('static right', () => {
    it('should return a right facing vector', () => {
      const actual = Vec2.right();
      expect(actual.x).toBe(1);
      expect(actual.y).toBe(0);
    });
  });

  describe('static up', () => {
    it('should return an upward facing vector', () => {
      const actual = Vec2.up();
      expect(actual.x).toBe(0);
      expect(actual.y).toBe(-1);
    });
  });

  describe('static down', () => {
    it('should return a downward facing vector', () => {
      const actual = Vec2.down();
      expect(actual.x).toBe(0);
      expect(actual.y).toBe(1);
    });
  });

  describe('static zero', () => {
    it('should return zero vector', () => {
      const actual = Vec2.zero();
      expect(actual.x).toBe(0);
      expect(actual.y).toBe(0);
    });
  });

  describe('static one', () => {
    it('should return a vector with each component equal to 1', () => {
      const actual = Vec2.one();
      expect(actual.x).toBe(1);
      expect(actual.y).toBe(1);
    });
  });

  describe('static dist', () => {
    const v = { x: 66, y: 57 };
    const u = { x: 70, y: 60 };

    it('should return the distance between two vectors', () => {
      const actual = Vec2.dist(v, u);
      expect(actual).toBe(5);
    });
  });

  describe('static cross', () => {
    const v = { x: 1, y: 2 };
    const u = { x: 3, y: 4 };

    it('should return the cross product of two vectors', () => {
      const actual = Vec2.cross(v, u);
      expect(actual).toBe(-2);
    });
  });

  describe('static dot', () => {
    const v = { x: 1, y: 2 };
    const u = { x: 3, y: 4 };

    it('should return the dot product of two vectors', () => {
      const actual = Vec2.dot(v, u);
      expect(actual).toBe(11);
    });
  });

  describe('static mag', () => {
    const v = { x: 3, y: 4 };

    it('should return a vectors magnitude', () => {
      const actual = Vec2.mag(v);
      expect(actual).toBe(5);
    });
  });

  describe('static negate', () => {
    const v = { x: 3, y: 4 };

    it('should return the negated version of a vector', () => {
      const actual = Vec2.negate(v);
      expect(actual.x).toBe(-3);
      expect(actual.y).toBe(-4);
    });
  });

  describe('static random', () => {
    it('should return a random vector', () => {
      const actual = Vec2.random();
      expect(actual.x).toBeGreaterThanOrEqual(0);
      expect(actual.x).toBeLessThanOrEqual(1);
      expect(actual.y).toBeGreaterThanOrEqual(0);
      expect(actual.x).toBeLessThanOrEqual(1);
    });
  });

  describe('static lerp', () => {
    const v = { x: 100, y: 100 };
    const u = { x: 200, y: 200};
    const normal = 0.5;
    
    it('should return vector intepolated linearly between two vectors', () => {
      const actual = Vec2.lerp(v, u, normal);
      expect(actual.x).toBe(150);
      expect(actual.y).toBe(150);
    });
  });
}); 