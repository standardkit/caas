import { describe, expect, test } from '@jest/globals';
import { title } from '@standardkit/caas';

describe('title', () => {
  test.each([
    [['a'], 'A'],
    [['A'], 'A'],
    [['hello'], 'Hello'],
    [['hello', 'world'], 'Hello World'],
    [['get', 'http', 'response'], 'Get Http Response'],
  ])('title(%s) -> %s', (input, expected) => {
    expect(title(input)).toEqual(expected);
  });
});
