import SkillRow from './SkillRow';
import type { ReadinessSkill } from '../../types/readiness';

interface SkillBreakdownProps {
  skills: ReadinessSkill[];
}

export default function SkillBreakdown({ skills }: SkillBreakdownProps) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-3 md:p-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">Skill Area Breakdown</h2>
          <p className="text-[11px] text-slate-500 mt-0.5">Progress across key areas</p>
        </div>

        <button className="text-[11px] font-medium text-blue-600 hover:underline shrink-0">
          View report →
        </button>
      </header>

      <div className="mt-3 space-y-2">
        {skills.map((skill) => (
          <SkillRow key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
