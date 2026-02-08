import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import type { TopbarProps } from '../types/topbar';

export default function Topbar({ learner, onLogout }: TopbarProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="flex w-full items-center justify-between px-4 md:px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Quest logo" className="h-8 w-8" />
          <span className="text-lg font-semibold text-slate-900">Quest</span>
        </Link>

        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          <div className="text-right leading-tight">
            <p className="text-sm font-medium text-slate-900">{learner.name}</p>
            <p className="text-xs text-slate-500">{learner.level}</p>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="User menu"
          >
            {learner.name.charAt(0).toUpperCase()}
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>

              <button
                onClick={onLogout}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-50"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
