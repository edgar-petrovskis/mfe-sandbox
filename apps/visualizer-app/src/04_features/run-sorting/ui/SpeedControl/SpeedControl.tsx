import type { InputHTMLAttributes } from 'react';
import { Field, Label, Slider } from './SpeedControl.styles';

type SpeedControlProps = {
  value: number;
  onValueChange: (value: number) => void;
};

const SPEED_MIN = 60;
const SPEED_MAX = 200;
const SPEED_STEP = 20;

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
