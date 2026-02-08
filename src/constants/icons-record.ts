import type { ComponentType, SVGProps } from 'react';
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
} from 'lucide-react';
import TrendWave from '../assets/icons/Trendwave';

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const iconsRecord: Record<string, IconType> = {
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
  trendWave: TrendWave,
};
