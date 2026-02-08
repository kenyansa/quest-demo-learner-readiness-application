import type { ReadinessInsights, ReadinessSkill } from '../types/readiness';

export function computeInsights(skills: ReadinessSkill[]): ReadinessInsights {
  const sorted = [...skills].sort((a, b) => b.score - a.score);
  const strongest = sorted[0];
  const focus = sorted[sorted.length - 1];

  return {
    strongestSkill: strongest.id,
    focusSkill: focus.id,
    message:
      strongest.score - focus.score < 15
        ? 'You’re building across multiple areas — consistent engagement will strengthen your progress.'
        : `You're strongest in ${strongest.label}. Focus next on ${focus.label} to improve your overall readiness.`,
  };
}
