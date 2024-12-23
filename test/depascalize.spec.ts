import { describe, expect, test } from '@jest/globals';
import { depascalize } from '@standardkit/caas';

describe('depascalize', () => {
  test.each([
    ['', []],
    ['String', ['string']],
    ['HelloWorld', ['hello', 'world']],
    ['GetHTTPResponse', ['get', 'http', 'response']],
    ['ToJSON', ['to', 'json']],
    ['XMLParser', ['xml', 'parser']],
    ['ABC', ['abc']],
    ['A', ['a']],
  ])('depascalize(%s) -> %s', (input, expected) => {
    expect(depascalize(input)).toEqual(expected);
  });
});
