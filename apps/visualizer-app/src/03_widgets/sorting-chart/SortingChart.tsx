import styled from 'styled-components';
import type { HTMLAttributes, ReactNode } from 'react';
import { AlgorithmStep } from '../../05_entities/algorithm';

type SortingChartProps = {
  step?: AlgorithmStep;
};

const CHART_WIDTH = 520;
const CHART_HEIGHT = 320;
const COLUMN_GAP = 1;
const COLOR_DEFAULT = '#7c4dff';
const COLOR_HIGHLIGHT = '#fdd835';

const roundUpToNearest10 = (value: number) => Math.ceil(value / 10) * 10;

const ChartFrame = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: ${CHART_WIDTH}px;
  height: ${CHART_HEIGHT}px;
  border: 1px solid #ddd;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ChartArea = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  height: 100%;
  position: relative;
`;

const YAxis = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-right: 8px;
  min-width: 50px;
  color: #555;
  font-size: 12px;
  position: relative;
`;

const YAxisLine = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 20px;
  width: 1px;
  background: #444;
`;

const YTickRow = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const YTickGuide = styled.div<HTMLDivAttributes<HTMLDivElement>>`
  height: 1px;
  background: #ccc;
  flex: 1;
`;

const PlotArea = styled.div<HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

type BarsGridProps = { columns: number; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
const BarsGrid = styled.div<BarsGridProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 20px;
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 1fr);
  column-gap: ${COLUMN_GAP}px;
  align-items: end;
  padding-bottom: 8px;
`;

type BarProps = { highlighted: boolean; heightPercent: number; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
const Bar = styled.div<BarProps>`
  background: ${(p) => (p.highlighted ? COLOR_HIGHLIGHT : COLOR_DEFAULT)};
  height: ${(p) => p.heightPercent}%;
  transition: height 200ms ease, background 200ms ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  padding-bottom: 4px;
  border-radius: 2px 2px 0 0;
`;

type XAxisProps = { columns: number; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
const XAxis = styled.div<XAxisProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 1fr);
  column-gap: ${COLUMN_GAP}px;
  padding-top: 4px;
  border-top: 1px solid #444;
  color: #555;
  font-size: 10px;
`;

type XTickProps = { active: boolean; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
const XTick = styled.div<XTickProps>`
  text-align: center;
  opacity: ${(p) => (p.active ? 1 : 0.4)};
`;

const YAxisLabel = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: absolute;
  left: -32px;
  top: 50%;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: center;
  color: #444;
  font-size: 12px;
`;

const XAxisLabel = styled.div<HTMLAttributes<HTMLDivElement>>`
  text-align: center;
  color: #444;
  font-size: 12px;
`;

const EmptyState = styled.div`
  min-height: ${CHART_HEIGHT}px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

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
