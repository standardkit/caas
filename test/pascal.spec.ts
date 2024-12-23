import { describe, expect, test } from '@jest/globals';
import { pascal } from '@standardkit/caas';

describe('pascal', () => {
  test.each([
    [['hello'], 'Hello'],
    [['a'], 'A'],
    [['hello', 'world'], 'HelloWorld'],
    [['get', 'http', 'response'], 'GetHttpResponse'],
  ])('pascal(%s) -> %s', (input, expected) => {
    expect(pascal(input)).toEqual(expected);
  });
});
