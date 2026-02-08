import readinessJson from '../json/readiness.json';
import activitiesJson from '../json/activities.json';
import type { ReadinessData } from '../types/readiness';
import type { Activity } from '../types/activity';

export const readiness = readinessJson as ReadinessData;
export const activities = (activitiesJson as { activities: Activity[] }).activities;
