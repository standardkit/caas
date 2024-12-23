import { describe, expect, test } from '@jest/globals';
import { human } from '@standardkit/caas';

describe('human', () => {
  test.each([
    [['hello'], 'hello'],
    [['hello', 'world'], 'hello world'],
    [['get', 'http', 'response'], 'get http response'],
  ])('human(%s) -> %s', (input, expected) => {
    expect(human(input)).toEqual(expected);
  });
});
