import sum from '../src/sum'

const sumTest = sum;
test('adds 14 + 15 to equal 29', () => {
  expect(sumTest(14, 15)).toBe(29);
});

