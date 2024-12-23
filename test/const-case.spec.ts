import { describe, expect, test } from '@jest/globals';
import { constCase } from '@standardkit/caas';

describe('constCase', () => {
  test.each([
    [['hello'], 'HELLO'],
    [['hello', 'world'], 'HELLO_WORLD'],
    [['get', 'http', 'response'], 'GET_HTTP_RESPONSE'],
  ])('constCase(%s) -> %s', (input: string[], expected: string) => {
    expect(constCase(input)).toEqual(expected);
  });
});
