import * as React from 'react';
import { cn } from '../../utils/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export function Progress({ value, className, ...props }: ProgressProps) {
  const v = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn('h-2 w-full rounded-full bg-grey2 overflow-hidden', className)}
      {...props}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
    >
      <div
        className="h-full rounded-full bg-navy transition-all duration-500"
        style={{ width: `${v}%` }}
      />
    </div>
  );
}
