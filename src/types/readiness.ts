export type SkillStatus = 'strong' | 'building' | 'on_track' | 'needs_focus';

export type SkillId = 'academics' | 'career_skills' | 'life_skills' | 'entrepreneurship';

export interface ReadinessSkill {
  id: SkillId;
  label: string;
  score: number;
  status: SkillStatus;
  description: string;
}

export interface Learner {
  id: string;
  name: string;
  level: string;
  estimatedCompletion: string;
}

export interface OverallReadiness {
  score: number;
  status: 'on_track' | 'at_risk';
  interpretation: string;
  description: string;
}

export interface ReadinessInsights {
  strongestSkill: SkillId;
  focusSkill: SkillId;
  message: string;
}

export interface ReadinessData {
  learner: Learner;
  overallReadiness: OverallReadiness;
  skills: ReadinessSkill[];
  insights: ReadinessInsights;
}
