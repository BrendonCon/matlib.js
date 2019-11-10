import normalize from './../../src/utils/normalize.js';

describe('normalize', () => {
  it('should return a value between 0 and 1', () => {
    const actual = normalize(50, 0, 100);
    expect(actual).toBe(0.5);
  });
}); 