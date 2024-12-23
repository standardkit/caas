import { describe, expect, test } from '@jest/globals';
import { path } from '@standardkit/caas';

describe('path', () => {
  test.each([
    [['hello'], 'hello'],
    [['hello', 'world'], 'hello/world'],
    [['articles', ':id', 'comments'], 'articles/:id/comments'],
  ])('path(%s) -> %s', (input, expected) => {
    expect(path(input)).toEqual(expected);
  });
});
