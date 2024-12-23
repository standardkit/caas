import { capitalize } from './';

export function camel(segments: string[]): string {
  const [first, ...rest] = segments;
  const capitalizedRest = rest.map(capitalize).join('');

  return [first, capitalizedRest].join('');
}
