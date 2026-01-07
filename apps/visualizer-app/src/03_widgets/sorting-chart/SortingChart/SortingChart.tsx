import { AlgorithmStep } from '../../../05_entities/algorithm';
import {
  Bar,
  BarsGrid,
  ChartArea,
  ChartFrame,
  EmptyState,
  PlotArea,
  XAxis,
  XAxisLabel,
  XTick,
  YAxis,
  YAxisLabel,
  YAxisLine,
  YTickGuide,
  YTickRow,
} from './SortingChart.styles';

type SortingChartProps = {
  step?: AlgorithmStep;
};

const roundUpToNearest10 = (value: number) => Math.ceil(value / 10) * 10;

export function SortingChart({ step }: SortingChartProps) {
  const values = step?.array ?? [];
  if (values.length === 0) {
    return <EmptyState>No data</EmptyState>;
  }

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const xAxisEnd = roundUpToNearest10(values.length);
  const yAxisEnd = roundUpToNearest10(maxValue || 1);
  const yAxisStart = minValue;
  const yRange = Math.max(yAxisEnd - yAxisStart, 1);

  const yTicks: number[] = [];
  const yStep = Math.max(1, Math.ceil(yRange / 5));
  for (let v = yAxisStart; v <= yAxisEnd; v += yStep) {
    yTicks.push(v);
  }
  if (yTicks[yTicks.length - 1] !== yAxisEnd) {
    yTicks.push(yAxisEnd);
  }

  return (
    <ChartFrame>
      <ChartArea>
        <YAxis>
          <YAxisLine />
          {yTicks.map((tick) => (
            <YTickRow key={tick}>
              <span>{tick}</span>
              <YTickGuide />
            </YTickRow>
          ))}
        </YAxis>
        <PlotArea>
          <BarsGrid columns={values.length}>
            {values.map((value, idx) => {
              const isHighlighted = !!step?.highlighted?.includes(idx);
              const heightPercent = Math.max(
                ((value - yAxisStart) / yRange) * 100,
                4,
              );
              return (
                <Bar
                  key={`${idx}-${value}`}
                  highlighted={isHighlighted}
                  heightPercent={heightPercent}
                >
                  {value}
                </Bar>
              );
            })}
          </BarsGrid>
          <XAxis columns={xAxisEnd}>
            {Array.from({ length: xAxisEnd }, (_, i) => i + 1).map((tick) => (
              <XTick key={tick} active={tick <= values.length}>
                {tick}
              </XTick>
            ))}
          </XAxis>
          <YAxisLabel>number</YAxisLabel>
        </PlotArea>
      </ChartArea>
      <XAxisLabel>elements</XAxisLabel>
    </ChartFrame>
  );
}
