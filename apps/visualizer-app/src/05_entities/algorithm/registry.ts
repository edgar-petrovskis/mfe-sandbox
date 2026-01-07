import { AlgorithmStep, AlgorithmStrategy, AlgorithmId } from './types';

function* bubbleSortSteps(input: number[]): Iterable<AlgorithmStep> {
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

const bubbleSortStrategy: AlgorithmStrategy = {
  id: 'bubble',
  label: 'Bubble Sort',
  run: (input: number[]) => bubbleSortSteps(input),
};

const strategies: AlgorithmStrategy[] = [bubbleSortStrategy];

export function getStrategies(): AlgorithmStrategy[] {
  return strategies;
}

export function findStrategy(id: AlgorithmId): AlgorithmStrategy {
  const strategy = strategies.find((entry) => entry.id === id);
  if (!strategy) {
    throw new Error(`Strategy not found for id: ${id}`);
  }
  return strategy;
}
