import type { AlgorithmId } from '../../../../05_entities/algorithm';
import { Field, Label, Select } from './AlgorithmSelect.styles';

type Option = {
  id: AlgorithmId;
  label: string;
};

type AlgorithmSelectProps = {
  options: Option[];
  value: AlgorithmId | undefined;
  onChange: (id: AlgorithmId) => void;
};

export function AlgorithmSelect({
  options,
  value,
  onChange,
}: AlgorithmSelectProps) {
  return (
    <Field>
      <Label>Algorithm</Label>
      <Select
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value as AlgorithmId)}
        disabled={options.length === 0}
      >
        {options.length === 0 && <option value="">No algorithms</option>}
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </Select>
    </Field>
  );
}
