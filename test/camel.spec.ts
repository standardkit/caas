import { describe, expect, test } from '@jest/globals';
import { camel } from '@standardkit/caas';

describe('camel', () => {
  test.each([
    [['hello'], 'hello'],
    [['hello', 'world'], 'helloWorld'],
    [['get', 'http', 'response'], 'getHttpResponse'],
  ])('camel(%s) -> %s', (input, expected) => {
    expect(camel(input)).toEqual(expected);
  });
});
