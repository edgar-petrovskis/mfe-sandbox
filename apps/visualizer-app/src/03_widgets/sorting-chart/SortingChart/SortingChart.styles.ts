import styled from 'styled-components';
import type { HTMLAttributes, ReactNode } from 'react';

const CHART_WIDTH = 520;
const CHART_HEIGHT = 320;
const COLUMN_GAP = 1;
const COLOR_DEFAULT = '#7c4dff';
const COLOR_HIGHLIGHT = '#fdd835';

export const ChartFrame = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: ${CHART_WIDTH}px;
  height: ${CHART_HEIGHT}px;
  border: 1px solid #ddd;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ChartArea = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  height: 100%;
  position: relative;
`;

export const YAxis = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-right: 8px;
  min-width: 50px;
  color: #555;
  font-size: 12px;
  position: relative;
`;

export const YAxisLine = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 20px;
  width: 1px;
  background: #444;
`;

export const YTickRow = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const YTickGuide = styled.div<HTMLAttributes<HTMLDivElement>>`
  height: 1px;
  background: #ccc;
  flex: 1;
`;

export const PlotArea = styled.div<HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

type BarsGridProps = {
  columns: number;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const BarsGrid = styled.div<BarsGridProps>`
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

type BarProps = {
  highlighted: boolean;
  heightPercent: number;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const Bar = styled.div<BarProps>`
  background: ${(p) => (p.highlighted ? COLOR_HIGHLIGHT : COLOR_DEFAULT)};
  height: ${(p) => p.heightPercent}%;
  transition:
    height 200ms ease,
    background 200ms ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  padding-bottom: 4px;
  border-radius: 2px 2px 0 0;
`;

type XAxisProps = {
  columns: number;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const XAxis = styled.div<XAxisProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 1fr);
  column-gap: ${COLUMN_GAP}px;
  padding-top: 4px;
  border-top: 1px solid #444;
  color: #555;
  font-size: 10px;
`;

type XTickProps = {
  active: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const XTick = styled.div<XTickProps>`
  text-align: center;
  opacity: ${(p) => (p.active ? 1 : 0.4)};
`;

export const YAxisLabel = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: absolute;
  left: -32px;
  top: 50%;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: center;
  color: #444;
  font-size: 12px;
`;

export const XAxisLabel = styled.div<HTMLAttributes<HTMLDivElement>>`
  text-align: center;
  color: #444;
  font-size: 12px;
`;

export const EmptyState = styled.div`
  min-height: ${CHART_HEIGHT}px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;
