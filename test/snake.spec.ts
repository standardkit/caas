import { describe, expect, test } from '@jest/globals';
import { snake } from '@standardkit/caas';

describe('snake', () => {
  test.each([
    [['hello'], 'hello'],
    [['hello', 'world'], 'hello_world'],
    [['get', 'http', 'response'], 'get_http_response'],
  ])('snake(%s) -> %s', (input, expected) => {
    expect(snake(input)).toEqual(expected);
  });
});
