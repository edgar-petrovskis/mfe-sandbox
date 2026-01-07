import styled from 'styled-components';
import type { SelectHTMLAttributes } from 'react';
import type { AlgorithmId } from '../../../05_entities/algorithm';

type Option = {
  id: AlgorithmId;
  label: string;
};

type AlgorithmSelectProps = {
  options: Option[];
  value: AlgorithmId | undefined;
  onChange: (id: AlgorithmId) => void;
};

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #333;
`;

const Label = styled.span`
  font-weight: 600;
`;

const Select = styled.select<SelectHTMLAttributes<HTMLSelectElement>>`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #222;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

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
