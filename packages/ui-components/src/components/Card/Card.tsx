import type { HTMLAttributes, PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ children, ...rest }: CardProps) {
  return (
    <div role="group" {...rest}>
      {children}
    </div>
  );
}
