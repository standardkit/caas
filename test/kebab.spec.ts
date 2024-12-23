import { describe, expect, test } from '@jest/globals';
import { kebab } from '@standardkit/caas';

describe('kebab', () => {
  test.each([
    [['hello'], 'hello'],
    [['hello', 'world'], 'hello-world'],
    [['get', 'http', 'response'], 'get-http-response'],
  ])('kebab(%s) -> %s', (input, expected) => {
    expect(kebab(input)).toEqual(expected);
  });
});
