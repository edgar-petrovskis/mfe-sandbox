import { useMemo, useState } from 'react';
import { SortingChart } from '../../../03_widgets/sorting-chart';
import {
  AlgorithmSelect,
  collectSteps,
  SpeedControl,
  usePlayback,
} from '../../../04_features';
import type { AlgorithmId } from '../../../05_entities';
import {
  findStrategy,
  getStrategies,
  AlgorithmStep,
} from '../../../05_entities';
import {
  generateDefaultInput,
  parseInput,
  sanitizeNumberListInput,
} from '../../../04_features/run-sorting/lib/input';

type AlgorithmOption = {
  id: AlgorithmId;
  label: string;
};

const INPUT_PLACEHOLDER = 'e.g. 5, 1, 4, 2, 8';
const INITIAL_SPEED = 110;

export function VisualizerPage() {
  const options: AlgorithmOption[] = useMemo(
    () => getStrategies().map(({ id, label }) => ({ id, label })),
    [],
  );
  const [input, setInput] = useState<string>(() => generateDefaultInput());
  const [selected, setSelected] = useState<AlgorithmId>(options[0].id);
  const [steps, setSteps] = useState<AlgorithmStep[]>([]);
  const [speedMs, setSpeedMs] = useState(INITIAL_SPEED);
  const { currentStep, start } = usePlayback(steps, {
    intervalMs: speedMs,
  });

  const handleRun = () => {
    const numbers = parseInput(input);
    const strategy = findStrategy(selected);

    const collected = collectSteps(strategy, numbers);

    setSteps(collected);
    start();
  };

  const handleInputChange = (value: string) =>
    setInput(sanitizeNumberListInput(value));

  return (
    <div>
      <h2>Sorting Visualizer</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>
          Numbers (comma-separated)
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={INPUT_PLACEHOLDER}
            style={{
              width: '100%',
              padding: '6px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </label>
        <AlgorithmSelect
          options={options}
          value={selected}
          onChange={(id) => setSelected(id)}
        />
        <SpeedControl value={speedMs} onValueChange={setSpeedMs} />
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
