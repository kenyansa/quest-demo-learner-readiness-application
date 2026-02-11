import AiInsightCard from '../../components/dashboard/cards/aiInsight-card';
import ReadinessCard from '../../components/dashboard/cards/readiness-card';
import UpNextCard from '../../components/dashboard/cards/up-next-card';
import SkillBreakdown from '../../components/dashboard/skill/skill-breakdown';
import { computeInsights } from '../../lib/insights';
import { activities, readiness } from '../../utils/mock';

export default function Dashboard() {
  const insights = readiness.insights ?? computeInsights(readiness.skills);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 xl:px-8 space-y-5">
      <header className="space-y-0.5">
        <h1 className="text-lg md:text-xl font-semibold text-blue-900">
          Ready to take on the world?
        </h1>

        <p className="text-[13px] text-slate-500">
          Your latest readiness breakdown for university and beyond.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 space-y-4 min-w-0">
          <ReadinessCard overall={readiness.overallReadiness} />
          <SkillBreakdown skills={readiness.skills} />
        </div>

        <div className="lg:col-span-4 space-y-4 min-w-0">
          <AiInsightCard message={insights.message} />
          <UpNextCard activities={activities} />
        </div>
      </div>
    </div>
  );
}
