import Polar2D from './../../src/polar/Polar2D.js';

describe('Polar2D', () => {
  let sut;

  beforeEach(() => {
    sut = new Polar2D(100, 50);
  });

  describe('set', () => {
    it('should set the radius and angle', () => {
      sut.set(100, Math.PI);
      expect(sut.radius).toBe(100);
      expect(sut.theta).toBe(Math.PI);;
    });
  });

  describe('setAngle', () => {
    it('should set the angle', () => {
      sut.setAngle(6.28);
      expect(sut.theta).toBe(6.28);
    });
  });

  describe('setRadius', () => {
    it('should set the radius', () => {
      sut.setRadius(250);
      expect(sut.radius).toBe(250);
    });
  });

  describe('normalize', () => {
    it('should set the radius to 1', () => {
      sut.normalize();
      expect(sut.radius).toBe(1);
    });
  });

  describe('zero', () => {
    it('should set the radius and angle to 0', () => {
      sut.zero();
      expect(sut.radius).toBe(0);
      expect(sut.theta).toBe(0);
    });
  });

  describe('toArray', () => {
    it('should return an array version of the values', () => {
      const actual = sut.toArray();
      expect(actual[0]).toBe(100);
      expect(actual[1]).toBe(50);
    });
  });

  describe('toString', () => {
    it('should return an string version of the class', () => {
      const actual = sut.toString();
      const expected = 'Polar2D: { radius: 100, theta: 50 }';
      expect(actual).toBe(expected);
    });
  });

  describe('copy', () => {
    it('should return a new copy of this instance', () => {
      const actual = sut.copy();
      expect(actual).not.toBe(sut);
    });
  });

  describe('equals', () => {
    const sutPolar1 = { radius: 100, theta: 50 };
    const sutPolar2 = { radius: 1, theta: 25 };

    it('should return true if equal', () => {
      const actual = sut.equals(sutPolar1);
      expect(actual).toBeTruthy();
    });

    it('should return false if not equal', () => {
      const actual = sut.equals(sutPolar2);
      expect(actual).toBe(false);
    });
  });

  describe('fromVector', () => {
    it('should convert the vector to polar coordinates', () => {

    });
  });

  describe('toVector', () => {
    it('should convert the polar coordinates to a vector', () => {

    });
  });
}); 