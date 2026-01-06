import { useEffect, useMemo, useState } from 'react';
import { findStrategy, getStrategies } from '../../../05-entities/algorithm';
import { SortingChart } from '../../../03-widgets/sorting-chart';
import type {
  AlgorithmStep,
  AlgorithmStrategy,
} from '../../../05-entities/algorithm';

type AlgorithmOption = {
  id: string;
  label: string;
};

function generateDefaultInput(): string {
  const length = Math.floor(Math.random() * 7) + 1; // 1..7 numbers
  const numbers = Array.from({ length }, () => Math.floor(Math.random() * 100));
  return numbers.join(',');
}

function parseInput(value: string): number[] {
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)
    .map((v) => Number(v))
    .filter((v) => !Number.isNaN(v));
}

export function VisualizerPage() {
  const options: AlgorithmOption[] = useMemo(
    () => getStrategies().map(({ id, label }) => ({ id, label })),
    [],
  );
  const [input, setInput] = useState<string>(() => generateDefaultInput());
  const [selected, setSelected] = useState<string | undefined>(
    options[0]?.id ?? undefined,
  );
  const [steps, setSteps] = useState<AlgorithmStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || steps.length === 0) {
      return undefined;
    }
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev + 1 >= steps.length) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleRun = async () => {
    const numbers = parseInput(input);
    const strategy = selected ? findStrategy(selected) : undefined;
    if (!strategy) {
      // eslint-disable-next-line no-console
      console.warn('No strategy selected');
      return;
    }
    const collected = await collectSteps(strategy, numbers);
    setSteps(collected);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleInputChange = (value: string) => {
    const sanitized = value
      .replace(/[^0-9,]/g, '')
      .replace(/,{2,}/g, ',')
      .replace(/^,/g, '');

    setInput(sanitized);
  };

  return (
    <div>
      <h2>Sorting Visualizer</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Numbers (comma-separated)
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            rows={3}
            placeholder="e.g. 5, 1, 4, 2, 8"
            style={{ width: '100%' }}
          />
        </label>
        <label>
          Algorithm
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{ width: '100%' }}
          >
            {options.length === 0 && <option value="">No algorithms</option>}
            {options.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleRun}>
          Run
        </button>
      </div>
      <div style={{ marginTop: '16px' }}>
        <h3>Chart</h3>
        <SortingChart step={steps[currentStep]} />
      </div>
    </div>
  );
}

async function collectSteps(
  strategy: AlgorithmStrategy,
  numbers: number[],
): Promise<AlgorithmStep[]> {
  const output = strategy.run(numbers);
  const result: AlgorithmStep[] = [];

  if (
    typeof (output as AsyncIterable<AlgorithmStep>)[Symbol.asyncIterator] ===
    'function'
  ) {
    for await (const step of output as AsyncIterable<AlgorithmStep>) {
      result.push(step);
    }
  } else {
    for (const step of output as Iterable<AlgorithmStep>) {
      result.push(step);
    }
  }

  if (result.length === 0) {
    result.push({ array: [...numbers] });
  }

  return result;
}
