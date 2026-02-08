import type { ProgressMessageProps } from '../../types/progress';

export default function ProgressMessage({ interpretation, description }: ProgressMessageProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium text-violet-700">{interpretation}</p>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
