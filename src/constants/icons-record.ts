import {
  LayoutDashboard,
  Map,
  ClipboardList,
  Trophy,
  Settings,
  User,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Rocket,
  Sparkles,
  Clock,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

export const iconsRecord: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  journey: Map,
  activities: ClipboardList,
  achievements: Trophy,
  settings: Settings,
  user: User,

  academics: GraduationCap,
  career_skills: Briefcase,
  life_skills: HeartHandshake,
  entrepreneurship: Rocket,

  ai: Sparkles,
  upNext: Clock,
  arrowRight: ArrowRight,
};
