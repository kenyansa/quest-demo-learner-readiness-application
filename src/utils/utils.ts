import type { Activity } from "../types/activity";

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}


export function statusLabel(status: string) {
  switch (status) {
    case 'strong':
      return 'Strong';
    case 'building':
      return 'Building';
    case 'needs_focus':
      return 'Needs focus';
    case 'on_track':
      return 'On track';
    default:
      return 'In progress';
  }
}

function getStatusPriority(activity: Activity) {
  if (activity.status === 'deadline') return 0;
  if (activity.status === 'recommended') return 1;
  return 2;
}

export function getDueTimestamp(activity: Activity) {
  return activity.dueDate ? new Date(activity.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
}

export function sortActivitiesByPriorityThenDueDate(a: Activity, b: Activity) {
  const priorityA = getStatusPriority(a);
  const priorityB = getStatusPriority(b);

  if (priorityA !== priorityB) return priorityA - priorityB;

  if (a.status === 'deadline' && b.status === 'deadline') {
    const dueTimeA = getDueTimestamp(a);
    const dueTimeB = getDueTimestamp(b);
    return dueTimeA - dueTimeB;
  }

  return a.title.localeCompare(b.title);
}

export function formatDueDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
