import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

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

export const Slider = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  accent-color: #7c4dff;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
