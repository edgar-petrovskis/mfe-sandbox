import styled from 'styled-components';
import type { SelectHTMLAttributes } from 'react';

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  color: #333;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Select = styled.select<SelectHTMLAttributes<HTMLSelectElement>>`
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
