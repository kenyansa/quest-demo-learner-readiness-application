import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Progress } from '../../components/ui/progress';
import { skillMeta } from '../../lib/skill-meta';
import type { SkillId } from '../../types/readiness';
import { sortActivitiesByPriorityThenDueDate, statusLabel } from '../../utils/utils';
import { Badge } from '../../components/ui/badge';
import { activities, readiness } from '../../utils/mock';

export default function SkillDetail() {
  const { skillId } = useParams();
  const id = skillId as SkillId | undefined;

  const skill = readiness.skills.find((s) => s.id === id);

  if (!id || !skill) {
    return (
      <div className="p-4 space-y-4">
        <Card className="border border-slate-200/40 shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-lg font-semibold text-violet-700">Skill not found</h1>
            <p className="text-sm text-slate-600">
              We couldn’t find that skill. Please go back to your dashboard.
            </p>
            <Button asChild className="w-full">
              <Link to="/">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const meta = skillMeta[skill.id];
  const Icon = meta.icon;

  const suggested = activities
    .slice()
    .sort(sortActivitiesByPriorityThenDueDate)
    .filter((activity) => activity.skill === skill.id)
    .slice(0, 2);

  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-semibold text-violet-700 leading-snug">
        {skill.label}
      </h1>

      <Card className="border border-slate-200/40 shadow-sm hover:shadow-md transition-all rounded-xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md" style={{ backgroundColor: `${meta.color}15` }}>
                <Icon className="h-5 w-5" style={{ color: meta.color }} />
              </div>

              <div>
                <p className="text-sm font-medium text-violet-700">{skill.label}</p>
                <p className="text-xs text-slate-600">{statusLabel(skill.status)}</p>
              </div>
            </div>

            <Badge className="text-xs">{skill.score}%</Badge>
          </div>

          <div className="space-y-2">
            <Progress value={skill.score} className="h-2 rounded-full bg-slate-200" />
            <p className="text-sm text-slate-700 leading-relaxed">{skill.description}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-slate-200/40 shadow-sm hover:shadow-md transition-all rounded-xl">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-sm font-semibold text-violet-700">Suggested next steps</h2>

          {suggested.length === 0 ? (
            <p className="text-sm text-slate-600">No activities available for this skill yet.</p>
          ) : (
            <ul className="space-y-2">
              {suggested.map((a) => (
                <li
                  key={a.id}
                  className="
                    border border-slate-200/30 rounded-lg p-3
                    hover:bg-slate-50 shadow-sm hover:shadow-md
                    transition-all cursor-pointer
                  "
                >
                  <p className="text-sm font-medium text-violet-700">{a.title}</p>
                  <p className="text-xs text-slate-600 mt-1">{a.description}</p>

                  {a.durationMinutes && (
                    <p className="text-xs text-slate-600 mt-2">{a.durationMinutes} min</p>
                  )}
                  {a.dueDate && (
                    <p className="text-xs text-slate-600 mt-2">
                      Due {new Date(a.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Button asChild className="w-full">
        <Link to="/">Back to Dashboard</Link>
      </Button>
    </div>
  );
}
