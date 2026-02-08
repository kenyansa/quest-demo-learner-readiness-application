import { NavLink } from 'react-router-dom';
import { iconsRecord } from '../constants/icons-record';

const navItems = [
  { label: 'Dashboard', to: '/', icon: iconsRecord.dashboard },
  { label: 'My Journey', to: '/journey', icon: iconsRecord.journey },
  { label: 'Activities', to: '/activities', icon: iconsRecord.activities },
  {
    label: 'Achievements',
    to: '/achievements',
    icon: iconsRecord.achievements,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white min-h-screen p-4">
      <nav className="space-y-1">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all
                ${
                  isActive
                    ? 'bg-slate-100 text-violet-700'
                    : 'text-slate-800 hover:bg-slate-100 hover:text-violet-700'
                }`
            }
          >
            <Icon className="h-5 w-5 transition-colors" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
