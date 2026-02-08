import { Link } from 'react-router-dom';
import type { ReadinessSkill } from '../../../types/readiness';
import { skillMeta } from '../../../lib/skill-meta';

interface SkillRowProps {
  skill: ReadinessSkill;
}

export default function SkillRow({ skill }: SkillRowProps) {
  const meta = skillMeta[skill.id];
  const Icon = meta.icon;

  return (
    <Link
      to={`/skills/${skill.id}`}
      className="block rounded-lg px-2.5 py-2 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
      aria-label={`View details for ${skill.label}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-7 w-7 rounded-md flex items-center justify-center bg-slate-100 shrink-0">
            <Icon className="h-3.5 w-3.5" style={{ color: meta.color }} />
          </div>

          <p className="text-[13px] font-medium text-slate-900 truncate leading-snug">
            {skill.label}
          </p>
        </div>

        <span className="text-[13px] font-semibold text-slate-900 shrink-0">{skill.score}%</span>
      </div>

      <div className="mt-1.5 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${skill.score}%`, backgroundColor: meta.color }}
        />
      </div>
    </Link>
  );
}
