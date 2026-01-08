import type { InputHTMLAttributes } from 'react';
import { Field, Label, Slider } from './SpeedControl.styles';

type SpeedControlProps = {
  value: number;
  onValueChange: (value: number) => void;
};

const SPEED_MIN = 20;
const SPEED_MAX = 200;
const SPEED_STEP = 5;

export function SpeedControl({
  value,
  onValueChange,
  disabled,
  ...rest
}: SpeedControlProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  const clamped = Math.min(Math.max(value, SPEED_MIN), SPEED_MAX);
  const invertedValue = SPEED_MAX + SPEED_MIN - clamped;

  return (
    <Field>
      <Label>Speed ({clamped}ms)</Label>
      <Slider
        type="range"
        min={SPEED_MIN}
        max={SPEED_MAX}
        step={SPEED_STEP}
        value={invertedValue}
        onChange={(e) => {
          const raw = Number(e.target.value);
          onValueChange(SPEED_MAX + SPEED_MIN - raw);
        }}
        disabled={disabled}
        {...rest}
      />
    </Field>
  );
}
