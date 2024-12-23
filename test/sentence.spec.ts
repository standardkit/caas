import { describe, expect, test } from '@jest/globals';
import { sentence } from '@standardkit/caas';

describe('sentence', () => {
  test.each([
    [['a'], 'A'],
    [['A'], 'A'],
    [['hello'], 'Hello'],
    [['hello', 'world'], 'Hello world'],
    [['get', 'http', 'response'], 'Get http response'],
  ])('sentence(%s) -> %s', (input, expected) => {
    expect(sentence(input)).toEqual(expected);
  });
});
