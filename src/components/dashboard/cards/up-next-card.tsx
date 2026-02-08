import type { Activity } from '../../../types/activity';
import { iconsRecord } from '../../../constants/icons-record';
import UpNextItem from '../up-next-item';

interface UpNextCardProps {
  activities: Activity[];
}

function sortActivities(a: Activity, b: Activity) {
  const rank = (x: Activity) => (x.status === 'deadline' ? 0 : x.status === 'recommended' ? 1 : 2);

  const ra = rank(a);
  const rb = rank(b);
  if (ra !== rb) return ra - rb;

  if (a.status === 'deadline' && b.status === 'deadline') {
    const da = a.dueDate ? new Date(a.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
    const db = b.dueDate ? new Date(b.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
    return da - db;
  }

  return a.title.localeCompare(b.title);
}

export default function UpNextCard({ activities }: UpNextCardProps) {
  const Clock = iconsRecord.upNext;
  const upNext = activities.slice().sort(sortActivities).slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm p-3 space-y-3">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-500" />
          <h2 className="text-[13px] font-semibold text-violet-700">Up next</h2>
        </div>

        <button className="text-[12px] font-medium text-violet-700 hover:underline">
          View all
        </button>
      </header>

      <div className="space-y-2">
        {upNext.map((a) => (
          <UpNextItem key={a.id} activity={a} />
        ))}
      </div>
    </div>
  );
}
