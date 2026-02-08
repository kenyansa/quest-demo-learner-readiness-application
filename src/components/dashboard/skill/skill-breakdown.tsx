import SkillRow from './skill-row';
import type { ReadinessSkill } from '../../../types/readiness';

interface SkillBreakdownProps {
  skills: ReadinessSkill[];
}

export default function SkillBreakdown({ skills }: SkillBreakdownProps) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-5">
  <header className="flex items-center justify-between">
    <div>
      <h2 className="text-sm font-semibold text-slate-900">Skill Area Breakdown</h2>
      <p className="text-xs text-slate-500 mt-0.5">How you’re progressing across key areas</p>
    </div>

    <button className="text-xs font-medium text-blue-600 hover:underline">
      View Detailed Report →
    </button>
  </header>

  <div className="mt-4 space-y-3">
    {skills.map((skill) => (
      <SkillRow key={skill.id} skill={skill} />
    ))}
  </div>
</section>

  );
}
