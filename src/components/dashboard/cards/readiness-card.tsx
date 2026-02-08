import type { OverallReadiness } from "../../../types/readiness";
import ProgressMessage from "../progress-message";
import ReadinessRing from "../readiness-Ring";

interface ReadinessCardProps {
  overall: OverallReadiness;
}

export default function ReadinessCard({ overall }: ReadinessCardProps) {
  const value = overall.score;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Readiness</h2>
        <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1">
          On track
        </span>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex items-center sm:justify-start">
          <div className="relative">
            <ReadinessRing value={value} size={110} strokeWidth={10} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-semibold text-slate-900">{value}%</div>
              <div className="text-[10px] tracking-wide text-slate-500">Readiness</div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <ProgressMessage
            interpretation={overall.interpretation}
            description={overall.description}
          />
          <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-500">
            <div>
              <div className="uppercase tracking-wide">Current Level</div>
              <div className="mt-1 text-slate-900 font-medium">Level 3 (Advanced)</div>
            </div>
            <div>
              <div className="uppercase tracking-wide">Est. Completion</div>
              <div className="mt-1 text-slate-900 font-medium">Nov 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
