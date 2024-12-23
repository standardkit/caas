import { capitalize } from './capitalize';

export function sentence(segments: string[]): string {
  const [first, ...rest] = segments;

  return [capitalize(first), ...rest].join(' ');
}
