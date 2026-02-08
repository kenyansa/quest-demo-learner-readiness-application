import type { Activity } from '../../types/activity';
import { skillMeta } from '../../lib/skill-meta';
import { colorPalette } from '../../lib/color-palette';
import { formatDueDate } from '../../utils/utils';

function getPill(activity: Activity) {
  if (activity.status === 'deadline') {
    return { label: 'Deadline', bg: `${colorPalette.dangerRed}20`, fg: colorPalette.dangerRed };
  }
  if (activity.status === 'recommended') {
    return {
      label: 'Recommended',
      bg: `${colorPalette.warningOrange}20`,
      fg: colorPalette.warningOrange,
    };
  }
  return { label: 'Optional', bg: `${colorPalette.grey2}`, fg: colorPalette.greyBlue };
}

export default function UpNextItem({ activity }: { activity: Activity }) {
  const meta = skillMeta[activity.skill];
  const pill = getPill(activity);

  const metaText =
    activity.status === 'deadline' && activity.dueDate
      ? `Due ${formatDueDate(activity.dueDate)}`
      : activity.durationMinutes
        ? `${activity.durationMinutes} min`
        : '';

  return (
    <div
      className="
        group flex items-start justify-between gap-2 rounded-lg border border-gray-200 px-2.5 py-2
        cursor-pointer
        bg-white
        hover:bg-gray-50
        hover:shadow-sm
        active:translate-y-[1px] active:shadow-none
        transition-all
      "
      onClick={() => console.log('Card clicked!', activity.title)}
    >
      <div className="flex items-start gap-2.5 flex-1 min-w-0">
        <div
          className="mt-0.5 p-1.5 rounded-md shrink-0"
          style={{ backgroundColor: `${meta.color}12` }}
        >
          <meta.icon className="h-4 w-4" style={{ color: meta.color }} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <p className="text-[13px] font-medium text-violet-900 truncate leading-snug">
              {activity.title}
            </p>

            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full leading-none"
              style={{ backgroundColor: pill.bg, color: pill.fg }}
            >
              {pill.label}
            </span>
          </div>

          <p className="text-[12px] text-slate-700 mt-0.5 leading-snug line-clamp-2">
            {activity.description}
          </p>

          {metaText && <p className="text-[11px] text-slate-700 mt-1 leading-none">{metaText}</p>}
        </div>
      </div>
    </div>
  );
}
