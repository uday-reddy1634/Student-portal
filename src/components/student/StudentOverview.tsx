import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  User,
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen,
  ArrowUpRight,
  UploadCloud,
  FileText,
  Star,
  Sparkles,
} from 'lucide-react';

export const StudentOverview: React.FC = () => {
  const { student, schedule, courseMarks, assignments, setStudentTab, openSubmitModal, showToast } = useApp();

  const handleJoinStream = (url?: string) => {
    showToast(
      'Connecting to Campus Stream',
      'Encrypted high-bandwidth terminal session initiated for Hall 402B (Turing Wing).'
    );
  };

  const handleReserveDesk = () => {
    showToast(
      'Workstation Reserved',
      'North Research Tower Desk #42 allocated under Candidate ID 84920 until 22:00.'
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Top Welcome Banner & Standing Strip */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-amber-50/80 via-slate-50 to-white dark:from-[#201f22] dark:via-[#1c1b1d] dark:to-[#131315] p-5 sm:p-6 lg:p-8 border border-amber-200/70 dark:border-white/5 shadow-xl transition-colors duration-200">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none"></div>
        <div className="absolute right-40 bottom-0 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          {/* Scholar Persona Lockup */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-gold/50 shadow-xl shrink-0 bg-slate-200 dark:bg-[#2a2a2c]">
              <img
                src={student.avatar}
                alt="Elena Vance"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[10px] sm:text-[11px] uppercase tracking-wider font-bold border border-amber-300 dark:border-gold/20">
                  {student.standing}
                </span>
                <span className="text-slate-400 dark:text-[#94a3b8] text-xs">|</span>
                <span className="text-emerald-700 dark:text-[#58e7aa] text-xs font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Academic Standing
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] tracking-tight font-['Plus_Jakarta_Sans']">
                Welcome back, <span className="text-[#b8860b] dark:text-gold-bright">{student.name}</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] max-w-xl mt-1 leading-relaxed">
                {student.program}. You are in the <strong className="text-slate-900 dark:text-[#f8fafc] font-semibold">{student.percentile}</strong> percentile of your collegiate cohort for {student.term}.
              </p>
            </div>
          </div>

          {/* Standing Metric Capsules */}
          <div className="grid grid-cols-3 sm:flex items-stretch gap-2.5 sm:gap-3 w-full sm:w-auto">
            <div className="bg-white/80 dark:bg-[#2a2a2c]/60 backdrop-blur-md px-3 sm:px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-center min-w-0 sm:min-w-27.5 shadow-xs">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider truncate">
                GPA
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#b8860b] dark:text-gold-bright font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
                  {student.gpa.toFixed(2)}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 dark:text-[#94a3b8]">/4.0</span>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-[#2a2a2c]/60 backdrop-blur-md px-3 sm:px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-center min-w-0 sm:min-w-30 shadow-xs">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider truncate">
                Rank
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
                  #{student.cohortRank}
                </span>
                <span className="text-[10px] sm:text-xs text-[#b8860b] dark:text-gold font-semibold truncate">of {student.cohortTotal}</span>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-[#2a2a2c]/60 backdrop-blur-md px-3 sm:px-5 py-3 rounded-xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-center min-w-0 sm:min-w-27.5 shadow-xs">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider truncate">
                Credits
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
                  {student.creditLoad}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-[#b9c8de]">Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Stat 1: Overall Attendance with Circular Progress SVG */}
        <div
          onClick={() => setStudentTab('attendance')}
          className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 flex items-center justify-between border border-slate-200/90 dark:border-white/5 shadow-sm hover:border-[#b8860b]/50 dark:hover:border-gold/30 transition-all cursor-pointer group"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider">
              Overall Attendance
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">
                {student.attendanceRate}%
              </span>
              <span className="text-xs text-emerald-600 dark:text-[#58e7aa] font-semibold flex items-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +2.1%
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-[#b9c8de]">On track for Term Distinction</span>
          </div>

          <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
            <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 36 36">
              <circle
                className="text-slate-100 dark:text-[#2a2a2c] stroke-current"
                cx="18"
                cy="18"
                fill="none"
                r="14"
                strokeWidth="3.5"
              />
              <circle
                className="text-[#b8860b] dark:text-gold stroke-current"
                cx="18"
                cy="18"
                fill="none"
                r="14"
                strokeDasharray="96, 100"
                strokeLinecap="round"
                strokeWidth="3.5"
              />
            </svg>
            <span className="absolute text-xs font-bold text-[#b8860b] dark:text-gold-bright">96%</span>
          </div>
        </div>

        {/* Stat 2: Academic Average */}
        <div
          onClick={() => setStudentTab('marks')}
          className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 flex flex-col justify-between border border-slate-200/90 dark:border-white/5 shadow-sm hover:border-[#b8860b]/50 dark:hover:border-gold/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider">
              Academic Average
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-gold/15 flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">
              {student.academicAverage}%
            </div>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-[#33ca90]/20 text-emerald-700 dark:text-[#58e7aa] text-[10px] font-semibold">
                Top 5% Percentile
              </span>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Semester Grade A+</span>
            </div>
          </div>
        </div>

        {/* Stat 3: Department Rank */}
        <div
          onClick={() => setStudentTab('rankings')}
          className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 flex flex-col justify-between border border-slate-200/90 dark:border-white/5 shadow-sm hover:border-[#b8860b]/50 dark:hover:border-gold/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider">
              Department Rank
            </span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#39485a]/40 flex items-center justify-center text-slate-700 dark:text-[#b9c8de]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#b8860b] dark:text-gold-bright font-['Plus_Jakarta_Sans'] tabular-nums">
                #{student.cohortRank}
              </span>
              <span className="text-xs text-slate-600 dark:text-[#94a3b8] font-medium truncate">Adv. Computer Systems</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-emerald-600 dark:text-[#58e7aa] text-[11px] font-semibold flex items-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> 2 places up
              </span>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">since Midterms</span>
            </div>
          </div>
        </div>

        {/* Stat 4: Pending Deliverables */}
        <div
          onClick={() => setStudentTab('work')}
          className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 flex flex-col justify-between border border-slate-200/90 dark:border-white/5 shadow-sm hover:border-red-400 dark:hover:border-[#ef4444]/40 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8] tracking-wider">
              Pending Deliverables
            </span>
            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-[#93000a]/40 flex items-center justify-center text-red-600 dark:text-[#ffb4ab]">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">
                2 Due
              </span>
              <span className="text-xs text-red-600 dark:text-[#ffb4ab] font-semibold">This Week</span>
            </div>
            <div className="flex items-center justify-between mt-1 text-xs">
              <span className="text-slate-500 dark:text-[#94a3b8] truncate max-w-32.5">Next: Problem Set IV</span>
              <span className="text-[#b8860b] dark:text-gold-bright font-semibold">In 36h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Grid: Left (Schedule & Faculty Endorsement) + Right (Marks & Work Vault) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT 7 COLUMNS: Academic Schedule & Faculty Endorsement */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Weekly Academic Schedule */}
          <div className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                    Academic Schedule
                  </h2>
                  <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                    Today's Class Timetable • Thursday, October 15
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#2a2a2c] text-slate-600 dark:text-[#b9c8de] text-[11px] font-semibold">
                3 Sessions
              </span>
            </div>

            {/* Timetable Items */}
            <div className="flex flex-col gap-3">
              {schedule.map((item) => {
                const isOngoing = item.status === 'ongoing';
                return (
                  <div
                    key={item.id}
                    className={`relative overflow-hidden rounded-xl p-4 transition-all border ${
                      isOngoing
                        ? 'bg-amber-50/70 dark:bg-[#2a2a2c]/80 border-amber-300 dark:border-gold/40 shadow-xs'
                        : 'bg-slate-50 dark:bg-[#201f22]/60 border-slate-200/70 dark:border-white/5 hover:bg-slate-100/80 dark:hover:bg-[#201f22]'
                    }`}
                  >
                    {isOngoing && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#b8860b] dark:bg-gold"></div>}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-1">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-lg min-w-18.75 ${
                            isOngoing
                              ? 'bg-white dark:bg-[#0e0e10] text-[#b8860b] dark:text-gold-bright shadow-xs'
                              : 'bg-white dark:bg-[#1c1b1d] text-slate-800 dark:text-[#f8fafc]'
                          }`}
                        >
                          <span className="text-xs font-bold font-['Plus_Jakarta_Sans'] tabular-nums">
                            {item.timeStart}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">{item.timeEnd} {item.period}</span>
                        </div>

                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-[#f8fafc]">
                              {item.courseName}
                            </span>
                            {isOngoing ? (
                              <span className="px-1.5 py-0.5 rounded-full bg-amber-200/70 dark:bg-gold/20 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold animate-pulse">
                                Ongoing
                              </span>
                            ) : (
                              <span className="px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-[#353437] text-slate-600 dark:text-[#94a3b8] text-[10px] font-medium">
                                {item.statusLabel}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-[#94a3b8] mt-1 flex-wrap">
                            <span className="flex items-center gap-1">
                              <User className="w-3.5 h-3.5 text-slate-400 dark:text-[#b9c8de]" /> {item.instructor}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-[#b9c8de]" /> {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {isOngoing ? (
                        <button
                          onClick={() => handleJoinStream(item.streamUrl)}
                          className="self-end sm:self-center px-4 py-1.5 rounded-lg bg-[#b8860b] dark:bg-gold text-white dark:text-obsidian text-xs font-bold hover:brightness-105 transition-all shadow-sm shrink-0"
                        >
                          Join Stream
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-[#94a3b8] self-end sm:self-center">
                          <span>Syllabus Ch. 9</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 dark:text-[#94a3b8]" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Teacher Feedback / Faculty Endorsement */}
          <div className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/5 shadow-sm relative overflow-hidden flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                    Faculty Endorsement
                  </h2>
                  <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                    Recent Term Evaluation • Published 2 days ago
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[11px] font-bold border border-amber-300 dark:border-gold/20">
                Distinguished Merit
              </span>
            </div>

            <div className="relative rounded-xl bg-slate-50 dark:bg-[#201f22]/70 p-4 border border-slate-200/70 dark:border-white/5 border-l-2 border-l-[#b8860b] dark:border-l-gold">
              <p className="text-xs sm:text-sm text-slate-800 dark:text-[#f8fafc] italic leading-relaxed font-['Manrope']">
                “Elena demonstrated an extraordinarily mature command over asynchronous memory barriers in her Midterm Capstone. Her implementation of lock-free cache synchronization outperformed departmental reference baselines by 18%. An exemplary scholar.”
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApVVkSEUwDmb6K6J8SLBdo0l9t7ak5NkGSg4K0C_gCwf1mnM0lrFEJ_YtTG5ATvnWQ0niyG2sNNDdkmZUnfe_UWRRRgzscQwPG02MsKaiLK96vKnKQmz-0igtWDrnxE88BU-Hr8RLT9j5IBG1dMwslYUs8PvRy6BVVbEi8Yp826dEu350Ki89aAk6AYV11DeUW0lykLYGeXelMDCgr9e_1FGD_TrnLpTg9wTP9pJfFllJTAS9ZYiJt"
                    alt="Prof. Sterling Montgomery"
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-gold/30"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-900 dark:text-[#f8fafc]">
                      Prof. Sterling Montgomery
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">
                      Chair of Systems Architecture
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-[#b9c8de] font-mono">CS-801 Assessment</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT 5 COLUMNS: Marks & Performance + Work Section Vault */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Recent Marks */}
          <div className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                    Recent Marks
                  </h2>
                  <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                    Continuous Evaluation Standings
                  </span>
                </div>
              </div>
              <button
                onClick={() => setStudentTab('marks')}
                className="text-xs text-[#b8860b] dark:text-gold-bright hover:underline font-semibold"
              >
                View Transcript
              </button>
            </div>

            <div className="flex flex-col gap-3.5">
              {courseMarks.slice(0, 4).map((c) => (
                <div key={c.id} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc] truncate max-w-50">
                      {c.courseName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#b8860b] dark:text-gold-bright tabular-nums">
                        {c.totalScore.toFixed(0)}
                        <span className="text-[10px] text-slate-400 dark:text-[#94a3b8]">/100</span>
                      </span>
                      <span className="px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-gold/20 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
                        {c.grade}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-[#2a2a2c] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#b8860b] dark:bg-gold h-full rounded-full transition-all duration-500"
                      style={{ width: `${c.totalScore}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-[#94a3b8]">
                    <span>{c.status}</span>
                    <span className="text-emerald-600 dark:text-[#58e7aa] font-medium">{c.percentile}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Vault Teaser */}
          <div className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/5 shadow-sm flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#2a2a2c] flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                      Work Vault
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                      Notes & Upcoming Deliverables
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-[#ef4444]/20 text-red-700 dark:text-[#ffb4ab] text-[11px] font-bold">
                  2 Critical
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {assignments.slice(0, 2).map((asg) => (
                  <div
                    key={asg.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 border border-slate-200/70 dark:border-white/5 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-[#2a2a2c] transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1c1b1d] flex items-center justify-center text-[#b8860b] dark:text-gold shrink-0 border border-slate-200/60 dark:border-none">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc] truncate">
                          {asg.title}
                        </span>
                        <span className="text-[10px] text-red-600 dark:text-[#ffb4ab] font-medium">
-                           {asg.dueText}
{asg.dueTimeFormatted}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => openSubmitModal(asg)}
                      className="px-3 py-1 rounded-lg bg-amber-100 dark:bg-gold/15 text-[#b8860b] dark:text-gold-bright hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-obsidian text-xs font-semibold transition-all shrink-0 ml-2"
                    >
                      {asg.status === 'submitted' ? 'Resubmit' : 'Submit'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Upload Action */}
            <div
              onClick={() => openSubmitModal(assignments[0])}
              className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-[#201f22]/50 border border-dashed border-amber-300 dark:border-gold/30 hover:border-[#b8860b] dark:hover:border-gold hover:bg-amber-50/50 dark:hover:bg-[#201f22] transition-all flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <UploadCloud className="w-6 h-6 text-[#b8860b] dark:text-gold mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc]">
                Fast Submission Portal
              </span>
              <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] mt-0.5">
                Drop packaged ZIP, PDF or TAR archive up to 100MB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Academic Atmosphere Bar: Campus Node */}
      <div className="rounded-2xl bg-white dark:bg-[#1c1b1d]/80 backdrop-blur-xl p-4 lg:p-5 border border-slate-200/90 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-1 ring-slate-200 dark:ring-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHzfYnQKmMOV2rz0omUXjUWaahwd7a2kT45ugljWkIdePzpTQqSx3QlJUMsBQ_kCPT5H_BihMyAqY19K-JkmzczcZzUYAp8IVsFDPdekLzVZgAhT4BaoofKtmu9gxv5_fv4wtUXWZM16nheN9JhbzzM9IKs0vHkYr2Ksr_41BuupwfZ6u-d20DiXYc8MYyoxORnGk0cjTKFHzsZCGHLU-mWAhIWKmILQH4SKOir5coCau-zRvuuWI0"
              alt="Campus Library"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm text-slate-900 dark:text-[#f8fafc]">
              Campus Node: North Research Tower
            </span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
              High-Performance Computing Cluster allocated for CS-801 until 22:00
            </span>
            </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-[#201f22] text-emerald-700 dark:text-[#58e7aa] text-xs font-semibold border border-emerald-200 dark:border-[#10b981]/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Systems Online</span>
          </div>
          <button
            onClick={handleReserveDesk}
            className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs text-slate-800 dark:text-[#f8fafc] hover:text-[#b8860b] dark:hover:text-gold font-semibold transition-colors"
          >
            Reserve Lab Desk
          </button>
        </div>
      </div>
    </div>
  );
};