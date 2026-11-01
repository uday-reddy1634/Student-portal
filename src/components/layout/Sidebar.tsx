import React from 'react';
import { useApp, StudentTab } from '../../context/AppContext';
import {
  LayoutGrid,
  CalendarCheck,
  BarChart3,
  Trophy,
  FolderKanban,
  MessageSquareQuote,
  Award,
  Calendar,
  ChevronDown,
  X,
  Sparkles,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const {
    studentTab,
    setStudentTab,
    student,
    setWorkSubTab,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useApp();

  const handleNavClick = (tab: StudentTab) => {
    setStudentTab(tab);
    if (tab === 'work') {
      setWorkSubTab('work');
    } else if (tab === 'feedback') {
      setWorkSubTab('feedback');
    }
    // Close mobile drawer on item select
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white dark:bg-[#0e0e10]/95 backdrop-blur-2xl z-50 flex flex-col justify-between py-5 px-4 border-r border-slate-200/90 dark:border-white/5 shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col gap-5 overflow-y-auto pr-1">
          {/* Brand Header with Mobile Close button */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-surface-dark border border-gold/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)] shrink-0 overflow-hidden">
                <img
                  src="/assets/aistudio/Image_4_0050ff95.png"
                  alt="Pathshala Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] leading-none">
                  Pathshala
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b8860b] dark:text-gold font-semibold mt-0.5">
                  Student Portal
                </span>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              title="Close Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Academic Term Capsule */}
          <div className="px-1">
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-[#1c1b1d]/80 border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs shadow-sm">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#b8860b] dark:text-gold" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider">
                    Academic Term
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-[#f8fafc]">Fall Semester 2026</span>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-[#94a3b8]" />
            </div>
          </div>

          {/* Student Navigation Links */}
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('overview')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'overview'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <LayoutGrid className="w-4 h-4 shrink-0" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => handleNavClick('attendance')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'attendance'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <CalendarCheck className="w-4 h-4 shrink-0" />
              <span>Attendance</span>
              <span className="ml-auto text-[11px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-[#10b981]/20 text-emerald-700 dark:text-[#58e7aa] font-semibold">
                96.4%
              </span>
            </button>

            <button
              onClick={() => handleNavClick('marks')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'marks'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>Marks & Performance</span>
              <span className="ml-auto text-[11px] font-semibold text-[#b8860b] dark:text-gold">3.94 GPA</span>
            </button>

            <button
              onClick={() => handleNavClick('rankings')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'rankings'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <Trophy className="w-4 h-4 shrink-0" />
              <span>Rankings & Leaderboard</span>
              <span className="ml-auto text-[11px] font-bold text-[#b8860b] dark:text-gold-bright">#4</span>
            </button>

            <button
              onClick={() => handleNavClick('work')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'work'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <FolderKanban className="w-4 h-4 shrink-0" />
              <span>Work Section</span>
              <span className="ml-auto text-[11px] px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-[#ef4444]/20 text-red-700 dark:text-[#ffb4ab] font-bold">
                2 Due
              </span>
            </button>

            <button
              onClick={() => handleNavClick('feedback')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                studentTab === 'feedback'
                  ? 'bg-slate-900 text-gold-bright dark:bg-[#2a2a2c] dark:text-gold-bright font-semibold shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]'
                  : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#201f22] hover:text-slate-900 dark:hover:text-[#f8fafc]'
              }`}
            >
              <MessageSquareQuote className="w-4 h-4 shrink-0" />
              <span>Feedback & Suggestions</span>
              <span className="ml-auto text-[11px] px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-gold/20 text-amber-800 dark:text-gold font-semibold">
                3 Rev
              </span>
            </button>
          </nav>
        </div>

        {/* Footer Profile & Honors Status */}
        <div className="flex flex-col gap-3 px-1 pt-4 border-t border-slate-200 dark:border-white/5">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#1c1b1d]/70 border border-amber-200/80 dark:border-white/5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-1.5 text-xs">
              <Award className="w-4 h-4 text-[#b8860b] dark:text-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b8860b] dark:text-gold">
                Dean's List Scholar
              </span>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gold/20 text-[#b8860b] dark:text-gold">
              Rank 04
            </span>
          </div>

          {/* Student Profile Lockup */}
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#2a2a2c]/40 border border-slate-200 dark:border-white/5 transition-all flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-gold/40"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0e0e10]"></span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc] leading-tight">
                  {student.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">
                  Candidate ID #{student.candidateId}
                </span>
              </div>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gold/15 text-[#b8860b] dark:text-gold-bright">
              Sem VII
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
