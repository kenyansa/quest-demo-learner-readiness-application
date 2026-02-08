import type { SVGProps } from 'react';

export default function TrendWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 16l6-6 4 4 7-7" />
      <path d="M20 7h-4" />
      <path d="M20 7v4" />
    </svg>
  );
}
