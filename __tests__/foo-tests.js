jest.unmock('../foo');
import foo from '../foo';

describe('Foo', () => {
  it('bar', () => {
    expect(true).toBe(true);
  });
})