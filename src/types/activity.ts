export type ActivityStatus = 'recommended' | 'optional' | 'deadline';

export interface Activity {
  id: string;
  title: string;
  skill: 'academics' | 'career_skills' | 'life_skills' | 'entrepreneurship';
  durationMinutes: number | null;
  status: ActivityStatus;
  dueDate: string | null;
  description: string;
}

export interface ActivitiesData {
  activities: Activity[];
}
