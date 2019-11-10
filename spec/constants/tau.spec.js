import tau from './../../src/constants/tau.js';

describe('tau', () => {
  it('should be equal to tau the constant', () => {
    const actual = 6.28318530718;
    expect(tau).toBeCloseTo(actual);
  });
}); 