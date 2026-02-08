import { NavLink } from 'react-router-dom';
import { iconsRecord } from '../constants/icons-record';

const navItems = [
  { label: 'Home', to: '/', icon: iconsRecord.dashboard },
  { label: 'Journey', to: '/journey', icon: iconsRecord.journey },
  { label: 'Activities', to: '/activities', icon: iconsRecord.activities },
  { label: 'Profile', to: '/profile', icon: iconsRecord.user },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100">
      <ul className="flex justify-around">
        {navItems.map(({ label, to, icon: Icon }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center px-3 py-2 text-xs transition
                 ${isActive ? 'text-violet-700' : 'text-slate-500 hover:text-violet-700'}`
              }
            >
              <Icon className="h-5 w-5 mb-1" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
