export function constCase(segments: string[]): string {
  return segments.map((string: string) => string.toUpperCase()).join('_');
}
