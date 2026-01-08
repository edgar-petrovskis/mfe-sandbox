import { AlgorithmStep } from '../types';

export function* bubbleSortSteps(input: number[]): Iterable<AlgorithmStep> {
  const arr = [...input];
  const n = arr.length;
  if (n === 0) {
    return;
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      yield { array: [...arr], highlighted: [j, j + 1] };
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        yield { array: [...arr], highlighted: [j, j + 1] };
      }
    }
  }

  yield { array: [...arr] };
}
