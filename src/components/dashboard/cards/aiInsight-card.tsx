import { iconsRecord } from '../../../constants/icons-record';

export default function AiInsightCard({ message }: { message: string }) {
  const Sparkles = iconsRecord.ai;

  return (
    <div
      className="
        group
        bg-blue-900 text-white
        rounded-xl
        p-3 md:p-4
        cursor-pointer
        hover:bg-blue-800
        hover:shadow-md
        active:translate-y-[1px] active:shadow-none
        transition-all
      "
    >
      <div className="flex items-center gap-2">
        <div className="rounded-md bg-white/15 p-1.5">
          <Sparkles className="h-4 w-4" />
        </div>
        <p className="text-[11px] font-semibold tracking-wide uppercase">AI Coach Insight</p>
      </div>

      <h3 className="mt-1 text-sm font-semibold leading-snug">Focus on Entrepreneurship next.</h3>

      <p className="mt-1 text-xs text-white/90 leading-snug">{message}</p>

      <button className="mt-2 inline-flex items-center rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium hover:bg-white/20">
        Go to Module →
      </button>
    </div>
  );
}
