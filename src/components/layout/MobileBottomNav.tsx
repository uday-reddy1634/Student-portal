import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutGrid,
  CalendarCheck,
  BarChart3,
  Trophy,
  FolderKanban,
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { studentTab, setStudentTab, setWorkSubTab } = useApp();

  const handleStudentTab = (tab: any) => {
    setStudentTab(tab);
    if (tab === 'work') setWorkSubTab('work');
    if (tab === 'feedback') setWorkSubTab('feedback');
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/95 dark:bg-[#0e0e10]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-white/10 z-40 px-3 flex items-center justify-around shadow-lg transition-colors duration-200">
      <button
        onClick={() => handleStudentTab('overview')}
        className={`flex flex-col items-center justify-center gap-1 w-14 py-1 rounded-xl transition-all ${
          studentTab === 'overview'
            ? 'text-[#b8860b] dark:text-gold-bright font-bold'
            : 'text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="text-[10px] tracking-tight">Overview</span>
      </button>

      <button
        onClick={() => handleStudentTab('attendance')}
        className={`flex flex-col items-center justify-center gap-1 w-14 py-1 rounded-xl transition-all ${
          studentTab === 'attendance'
            ? 'text-[#b8860b] dark:text-gold-bright font-bold'
            : 'text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <CalendarCheck className="w-4 h-4" />
        <span className="text-[10px] tracking-tight">Attendance</span>
      </button>

      <button
        onClick={() => handleStudentTab('marks')}
        className={`flex flex-col items-center justify-center gap-1 w-14 py-1 rounded-xl transition-all ${
          studentTab === 'marks'
            ? 'text-[#b8860b] dark:text-gold-bright font-bold'
            : 'text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <BarChart3 className="w-4 h-4" />
        <span className="text-[10px] tracking-tight">Marks</span>
      </button>

      <button
        onClick={() => handleStudentTab('work')}
        className={`flex flex-col items-center justify-center gap-1 w-14 py-1 rounded-xl transition-all ${
          studentTab === 'work'
            ? 'text-[#b8860b] dark:text-gold-bright font-bold'
            : 'text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <FolderKanban className="w-4 h-4" />
        <span className="text-[10px] tracking-tight">Work</span>
      </button>

      <button
        onClick={() => handleStudentTab('rankings')}
        className={`flex flex-col items-center justify-center gap-1 w-14 py-1 rounded-xl transition-all ${
          studentTab === 'rankings'
            ? 'text-[#b8860b] dark:text-gold-bright font-bold'
            : 'text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Trophy className="w-4 h-4" />
        <span className="text-[10px] tracking-tight">Ranks</span>
      </button>
    </nav>
  );
};
