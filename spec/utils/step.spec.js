import step from './../../src/utils/step.js';

describe('step', () => {
  it('should return 1 if the value is over the limit', () => {
    const actual = step(50, 65);
    expect(actual).toBe(1);
  });

  it('should return 0 if the value is under the limit', () => {
    const actual = step(20, 10);
    expect(actual).toBe(0);
  });
}); 