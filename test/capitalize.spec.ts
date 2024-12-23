import { describe, expect, test } from '@jest/globals';
import { capitalize } from '@standardkit/caas';

describe('capitalize', () => {
  test.each([
    ['hello', 'Hello'],
    ['Hello', 'Hello'],
    ['A', 'A'],
    ['a', 'A'],
    ['hello world', 'Hello world'],
  ])('capitalize(%s) -> %s', (input, expected) => {
    expect(capitalize(input)).toEqual(expected);
  });
});
