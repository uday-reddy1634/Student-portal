import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Moon,
  Sun,
  Bell,
  Menu,
  X,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    theme,
    toggleTheme,
    searchQuery,
    setSearchQuery,
    student,
    toggleMobileMenu,
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 'notif-1',
      title: 'Dean’s Honor Roll Standing Verified',
      time: '12m ago',
      desc: 'Semester VII GPA confirmed at 3.94 / 4.0. Top 3% collegiate standing.',
      type: 'gold',
    },
    {
      id: 'notif-2',
      title: 'Problem Set IV Deadline Approaching',
      time: '3h ago',
      desc: 'MATH-702 Geodesic Flows assignment due in 36 hours.',
      type: 'urgent',
    },
    {
      id: 'notif-3',
      title: 'Faculty Assessment Published',
      time: '1d ago',
      desc: 'Prof. Sterling Montgomery published mid-term systems evaluation.',
      type: 'faculty',
    },
  ];

  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-white/90 dark:bg-[#0e0e10]/85 backdrop-blur-xl border-b border-slate-200/90 dark:border-white/5 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-xs transition-colors duration-200">
      {/* Left: Mobile Hamburger & Search Input */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-[#f8fafc] hover:bg-slate-200 dark:hover:bg-[#2a2a2c] transition-all"
          title="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Brand Lockup Visible on Small Mobile Screens */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="w-7 h-7 rounded-lg bg-slate-900 dark:bg-surface-dark border border-gold/40 flex items-center justify-center p-1">
            <img
              src="/assets/aistudio/Image_4_0050ff95.png"
              alt="Pathshala Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-sm text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            Pathshala
          </span>
        </div>

        {/* Search Bar on Desktop / Tablet */}
        <div className="hidden sm:flex items-center gap-2.5 bg-slate-100 dark:bg-[#1c1b1d] px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/5 text-slate-500 dark:text-[#94a3b8] focus-within:border-[#b8860b] dark:focus-within:border-gold/40 focus-within:ring-1 focus-within:ring-gold/30 transition-all">
          <Search className="w-4 h-4 text-slate-400 dark:text-[#94a3b8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lectures, grades, syllabi..."
            className="bg-transparent text-xs text-slate-900 dark:text-[#f8fafc] placeholder:text-slate-400 dark:placeholder:text-[#94a3b8] focus:outline-none w-48 md:w-64 font-['Manrope']"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Right Controls: Theme toggle, Notifications, Student Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Dark / Light Mode Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-[#1c1b1d] p-1 rounded-full border border-slate-200 dark:border-white/5">
          <button
            onClick={() => theme === 'dark' && toggleTheme()}
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
              theme === 'light'
                ? 'bg-white text-[#b8860b] shadow-sm'
                : 'text-slate-400 dark:text-[#94a3b8] hover:text-slate-800 dark:hover:text-[#f8fafc]'
            }`}
            title="Light Theme"
          >
            <Sun className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => theme === 'light' && toggleTheme()}
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${
              theme === 'dark'
                ? 'bg-[#2a2a2c] text-gold-bright shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                : 'text-slate-400 dark:text-[#94a3b8] hover:text-slate-800 dark:hover:text-[#f8fafc]'
            }`}
            title="Dark Theme"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Notifications Icon with Unread Dot */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-slate-100 dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/5 text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc] hover:bg-slate-200 dark:hover:bg-[#2a2a2c] transition-all"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold ring-2 ring-white dark:ring-[#0e0e10]"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 p-3 rounded-2xl bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/5 mb-2">
                <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                  Scholastic Notifications
                </span>
                <span className="text-[10px] text-[#b8860b] dark:text-gold font-bold uppercase tracking-wider">
                  3 Unread
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 hover:bg-slate-100 dark:hover:bg-[#2a2a2c] transition-colors border border-slate-200/60 dark:border-white/5 flex flex-col gap-1 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                        {n.title}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-[#94a3b8]">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-[#94a3b8] leading-relaxed">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Persona Avatar */}
        <div className="flex items-center gap-2.5 pl-1 sm:pl-2 border-l border-slate-200 dark:border-white/10">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-8 h-8 rounded-full object-cover ring-1 ring-gold/40 shadow-sm shrink-0"
          />
          <div className="hidden lg:flex flex-col text-left">
            <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc] leading-tight">
              {student.name}
            </span>
            <span className="text-[10px] text-[#b8860b] dark:text-gold font-semibold">
              Honors Candidate
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
