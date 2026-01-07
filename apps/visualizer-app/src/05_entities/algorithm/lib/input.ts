export function generateDefaultInput(): string {
  const minLength = 7;
  const maxLength = 10;
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const numbers = Array.from({ length }, () => Math.floor(Math.random() * 100));

  return numbers.join(',');
}

// Sanitizes a freeform string into a comma-separated list of numbers.
export function sanitizeNumberListInput(value: string): string {
  return value
    .replace(/[^0-9,]/g, '')
    .replace(/,{2,}/g, ',')
    .replace(/^,/g, '');
}

export function parseInput(value: string): number[] {
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)
    .map((v) => Number(v))
    .filter((v) => !Number.isNaN(v));
}
