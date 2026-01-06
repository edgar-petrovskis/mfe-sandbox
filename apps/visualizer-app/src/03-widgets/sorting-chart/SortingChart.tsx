import { AlgorithmStep } from '../../05-entities/algorithm';

type SortingChartProps = {
  step: AlgorithmStep | undefined;
};

export function SortingChart({ step }: SortingChartProps) {
  const values = step?.array ?? [];
  if (values.length === 0) {
    return (
      <div
        style={{
          minHeight: '120px',
          border: '1px dashed #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
        }}
      >
        No data
      </div>
    );
  }

  const max = Math.max(...values, 1);

  return (
    <div
      style={{
        minHeight: '180px',
        border: '1px dashed #ccc',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '4px',
        padding: '8px',
      }}
    >
      {values.map((value, idx) => {
        const heightPercent = Math.max((value / max) * 100, 4);
        const isHighlighted = step?.highlighted?.includes(idx);
        return (
          <div
            key={`${idx}-${value}`}
            style={{
              flex: 1,
              background: isHighlighted ? '#ff8a65' : '#90caf9',
              height: `${heightPercent}%`,
              transition: 'height 200ms ease, background 200ms ease',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              color: '#0d47a1',
              fontSize: '12px',
              paddingBottom: '4px',
              borderRadius: '2px 2px 0 0',
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}
