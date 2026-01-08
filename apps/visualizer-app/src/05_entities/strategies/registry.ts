import { AlgorithmStrategy, AlgorithmId } from './types';
import { bubbleSortSteps } from './algorithm/bubble';
import { selectionSortSteps } from './algorithm/selection';

const bubbleSortStrategy: AlgorithmStrategy = {
  id: 'bubble',
  label: 'Bubble Sort',
  run: (input: number[]) => bubbleSortSteps(input),
};

const selectionSortStrategy: AlgorithmStrategy = {
  id: 'selection',
  label: 'Selection Sort',
  run: (input: number[]) => selectionSortSteps(input),
};

const strategies: AlgorithmStrategy[] = [
  bubbleSortStrategy,
  selectionSortStrategy,
];

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
