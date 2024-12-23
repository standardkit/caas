const WORD_END_REGEX = /[A-Z][a-z]{1,}$/;
const CAPS_END_REGEX = /[A-Z]+$/;

/**
 * @param string a PascalCase string. (e.g. 'StringToParse')
 *
 * @return string[] an array of substrings (e.g. ['string', 'to', 'params'])
 *
 * @example
 * depascalize('HelloWorld');
 * ['hello', 'world']
 *
 * @example
 * depascalize('IPAddress');
 * ['ip', 'address']
 *
 * @example
 * depascalize('ToJSON');
 * ['to', 'json']
 *
 * @example
 * depascalize('getHTTPResponse');
 * ['get', 'http', 'response']
 *
 * @note Input may not contain numbers
 */
export function depascalize(string: string): string[] {
  const words: string[] = [];

  while (string.length > 0) {
    const match: RegExp | undefined = [WORD_END_REGEX, CAPS_END_REGEX].find(
      (regex: RegExp): boolean => (string.match(regex)?.length ?? 0) > 0
    );
    if (!match) throw Error('input is not PascalCase');

    const lastWord = string.match(match)![0];
    words.push(lastWord.toLowerCase());
    string = string.slice(0, -lastWord.length);
  }

  return words.reverse();
}
