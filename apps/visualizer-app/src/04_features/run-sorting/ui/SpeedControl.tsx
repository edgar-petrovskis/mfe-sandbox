import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

type SpeedControlProps = {
  value: number;
  onValueChange: (value: number) => void;
};

const SPEED_MIN = 50;
const SPEED_MAX = 100;
const SPEED_STEP = 10;

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

const Slider = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  accent-color: #7c4dff;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export function SpeedControl({
  value,
  onValueChange,
  disabled,
  ...rest
}: SpeedControlProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  const clamped = Math.min(Math.max(value, SPEED_MIN), SPEED_MAX);

  return (
    <Field>
      <Label>Speed ({clamped}ms)</Label>
      <Slider
        type="range"
        min={SPEED_MIN}
        max={SPEED_MAX}
        step={SPEED_STEP}
        value={clamped}
        onChange={(e) => onValueChange(Number(e.target.value))}
        disabled={disabled}
        {...rest}
      />
    </Field>
  );
}
