import { capitalize } from './capitalize';

export function pascal(segments: string[]): string {
  return segments.map(capitalize).join('');
}
