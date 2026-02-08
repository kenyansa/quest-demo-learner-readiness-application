import * as React from 'react';
import { cn } from '../../utils/utils';

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-grey2',
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn('h-full w-full object-cover', className)}
      {...props}
      alt={props.alt ?? 'Avatar'}
    />
  );
}

export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'flex h-full w-full items-center justify-center text-sm font-medium text-greyBlue',
        className
      )}
      {...props}
    />
  );
}
