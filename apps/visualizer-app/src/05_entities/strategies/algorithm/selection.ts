import { AlgorithmStep } from '../types';

export function* selectionSortSteps(
  input: number[],
): Iterable<AlgorithmStep> {
  const arr = [...input];
  const n = arr.length;
  if (n === 0) {
    return;
  }

  for (let i = 0; i < n - 1; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < n; j += 1) {
      yield { array: [...arr], highlighted: [minIdx, j] };
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      yield { array: [...arr], highlighted: [i, minIdx] };
    }
  }

  yield { array: [...arr] };
}
