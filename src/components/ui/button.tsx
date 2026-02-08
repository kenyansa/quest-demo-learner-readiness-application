import * as React from 'react';
import { cn } from '../../utils/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-navy text-white hover:opacity-90 focus:ring-navy',
    secondary: 'bg-grey1 text-darkBlue hover:bg-grey2 focus:ring-greyBlue',
    ghost: 'bg-transparent text-darkBlue hover:bg-grey1 focus:ring-greyBlue',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (asChild) {
    if (!React.isValidElement(children)) {
      throw new Error('Button with asChild expects a single valid React element child.');
    }

    const child = children as React.ReactElement<{ className?: string }>;

    return React.cloneElement(child, {
      className: cn(child.props.className, classes),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
