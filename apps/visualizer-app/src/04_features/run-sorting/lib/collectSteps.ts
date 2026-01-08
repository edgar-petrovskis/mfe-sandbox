import type {
  AlgorithmStep,
  AlgorithmStrategy,
} from '../../../05_entities';

export function collectSteps(
  strategy: AlgorithmStrategy,
  numbers: number[],
): AlgorithmStep[] {
  const output = strategy.run(numbers) as Iterable<AlgorithmStep>;
  const result: AlgorithmStep[] = [];

  for (const step of output) {
    result.push(step);
  }

  if (result.length === 0) {
    result.push({ array: [...numbers] });
  }

  return result;
}
