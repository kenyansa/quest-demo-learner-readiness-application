import { Outlet, useNavigate } from 'react-router-dom';
import MobileNav from './mobile-nav';

import { readiness } from '../utils/mock';
import Topbar from './topbar';
import Sidebar from './sidebar';

export default function AppLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // TODO: clear auth (tokens/session) to be added here
    navigate('/login');
  };
  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Topbar learner={readiness.learner} onLogout={handleLogout} />
      <div className="flex flex-1 min-h-0">
        <div className="hidden md:flex w-64 shrink-0 border-r border-slate-200 bg-white">
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0 overflow-y-auto">
          <div className="w-full p-4 md:p-6 xl:p-8">
            <Outlet />
          </div>
        </main>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
