export type AlgorithmStep = {
  array: number[];
  highlighted?: number[]; // indices being compared or swapped
};

export interface AlgorithmStrategy {
  id: string;
  label: string;
  run(input: number[]): AsyncIterable<AlgorithmStep> | Iterable<AlgorithmStep>;
}
