import phi from './../../src/constants/phi.js';

describe('phi', () => {
  it('should be equal to phi the constant', () => {
    const actual = 1.618033988749895;
    expect(phi).toBe(actual);
  });
}); 