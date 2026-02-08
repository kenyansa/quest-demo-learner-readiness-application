const Journey = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-violet-700 mb-6">My Journey</h1>

        <ul className="space-y-3">
          <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Started Learning Module 1</span>
            <span className="text-xs sm:text-sm text-slate-700 mt-1 sm:mt-0">Completed</span>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Completed Daily Quiz</span>
            <span className="text-xs sm:text-sm text-slate-700 mt-1 sm:mt-0">In Progress</span>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <span className="font-medium text-slate-900">Unlocked Skill Mastery</span>
            <span className="text-xs sm:text-sm text-slate-700 mt-1 sm:mt-0">Locked</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Journey;
