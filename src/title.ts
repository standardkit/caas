import { capitalize } from './capitalize';

export function title(segments: string[]): string {
  return segments.map(capitalize).join(' ');
}
