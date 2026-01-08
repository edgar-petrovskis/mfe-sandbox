export type AlgorithmId = 'bubble' | 'selection';

export type AlgorithmStep = {
  array: number[];
  highlighted?: number[]; // indices being compared or swapped
};

export interface AlgorithmStrategy {
  id: AlgorithmId;
  label: string;
  run(input: number[]): AsyncIterable<AlgorithmStep> | Iterable<AlgorithmStep>;
}
