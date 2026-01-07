import type {
  AlgorithmStep,
  AlgorithmStrategy,
} from '../../../05_entities/algorithm';

export async function collectSteps(
  strategy: AlgorithmStrategy,
  numbers: number[],
): Promise<AlgorithmStep[]> {
  const output = strategy.run(numbers) as AsyncIterable<AlgorithmStep>;
  const result: AlgorithmStep[] = [];

  for await (const step of output) {
    result.push(step);
  }

  if (result.length === 0) {
    result.push({ array: [...numbers] });
  }

  return result;
}
