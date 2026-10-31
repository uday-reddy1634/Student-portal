import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Trophy,
  Users,
} from 'lucide-react';

export const StudentRankings: React.FC = () => {
  const { student, cohortLeaderboard } = useApp();

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-white dark:bg-[#1c1b1d]/90 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] text-[#b8860b] dark:text-gold-bright uppercase font-bold tracking-wider">
              Collegiate Cohort Standing
            </span>
            <span className="px-2 py-0.5 rounded bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
              Term 5 Ranking
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] tracking-tight font-['Plus_Jakarta_Sans']">
            Collegiate Leaderboard & Merit Standings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94a3b8] max-w-xl mt-1 leading-relaxed">
            Standardized academic decile ranking based on cumulative GPA, peer-reviewed lab benchmarks, and attendance compliance.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#201f22] p-3 rounded-2xl border border-slate-200 dark:border-white/5 self-start md:self-auto">
          <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-[#b8860b] dark:text-gold-bright">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-[#94a3b8]">Your Rank</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#b8860b] dark:text-gold-bright font-['Plus_Jakarta_Sans']">
                #04
              </span>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">of 128 Scholars</span>
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-[#58e7aa] font-semibold">Top 3.1% (Decile D10)</span>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rank 2 (Silver) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col items-center text-center relative overflow-hidden order-2 md:order-1 transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#b9c8de]/20 border border-slate-300 dark:border-[#b9c8de]/40 flex items-center justify-center text-slate-700 dark:text-[#b9c8de] text-xs font-bold mb-3 shadow-sm">
            #2
          </div>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
            alt="Sophia Chen"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-300 dark:ring-[#b9c8de]/50 mb-2"
          />
          <h3 className="font-bold text-sm text-slate-900 dark:text-[#f8fafc]">Sophia Chen</h3>
          <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Quantum Hardware</span>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-extrabold text-slate-900 dark:text-[#f8fafc] font-mono">3.98</span>
            <span className="text-[11px] text-emerald-600 dark:text-[#58e7aa] font-semibold">98.4% Att.</span>
          </div>
          <span className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#b9c8de] font-semibold">
            Silver Medalist
          </span>
        </div>

        {/* Rank 1 (Gold) */}
        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-[#201f22] border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col items-center text-center relative overflow-hidden order-1 md:order-2 transform md:-translate-y-2 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="w-9 h-9 rounded-full bg-gold text-obsidian flex items-center justify-center text-sm font-black mb-3 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            #1
          </div>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Alexander Rostova"
            className="w-16 h-16 rounded-full object-cover ring-2 ring-gold mb-2 shadow-md"
          />
          <h3 className="font-bold text-base text-slate-900 dark:text-[#f8fafc]">Alexander Rostova</h3>
          <span className="text-xs text-[#b8860b] dark:text-gold font-semibold">Pure Mathematics</span>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-extrabold text-[#b8860b] dark:text-gold-bright font-mono">4.00</span>
            <span className="text-xs text-emerald-600 dark:text-[#58e7aa] font-semibold">99.2% Att.</span>
          </div>
          <span className="mt-2 text-[10px] px-2.5 py-0.5 rounded-full bg-gold/20 text-[#b8860b] dark:text-gold-bright font-bold border border-gold/30">
            Dean's Gold Laureate
          </span>
        </div>

        {/* Rank 3 (Bronze) */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col items-center text-center relative overflow-hidden order-3 transition-colors">
          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-[#cd7f32]/20 border border-amber-300 dark:border-[#cd7f32]/40 flex items-center justify-center text-amber-800 dark:text-[#cd7f32] text-xs font-bold mb-3 shadow-sm">
            #3
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB751RfktsniSSXFdwn9MHa9bUvGX32rW3CaoG4nSKNFqJoBQjWAE0IGz1W5ckz5bLT2XW3pIiP5HM6MxgEy-Cu1JB7Cw-4LhRXDqTDE1miaoRKO_DnSzEtZp9_PaqelNEYhIZKT9-A4dMvnMxebURt78diCRhrc3nF8zYLN5cC3lSs6MK9VYLxlxbKpDQ1ta8_xnpHb3ljYBTof0kSd6UN_lSSANkRwdcLb96VI8Eg7mrK14PFPCe5"
            alt="Julian Hayes"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-300 dark:ring-[#cd7f32]/50 mb-2"
          />
          <h3 className="font-bold text-sm text-slate-900 dark:text-[#f8fafc]">Julian Hayes</h3>
          <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Applied Topology</span>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-extrabold text-slate-900 dark:text-[#f8fafc] font-mono">3.96</span>
            <span className="text-[11px] text-emerald-600 dark:text-[#58e7aa] font-semibold">97.1% Att.</span>
          </div>
          <span className="mt-2 text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-[#cd7f32]/15 text-amber-800 dark:text-[#cd7f32] font-semibold">
            Bronze Medalist
          </span>
        </div>
      </div>

      {/* Cohort Leaderboard Table */}
      <div className="bg-white dark:bg-[#1c1b1d]/85 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col gap-4 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#b8860b] dark:text-gold" />
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
              Complete Term VII Scholar Roster
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
            Evaluated by Faculty Academic Council
          </span>
        </div>

        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full text-left border-collapse min-w-150">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#201f22]/70 text-slate-600 dark:text-[#94a3b8] text-[10px] uppercase font-bold tracking-wider rounded-xl">
                <th className="py-3 px-4 rounded-l-xl">Rank</th>
                <th className="py-3 px-4">Scholar</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4 text-center">GPA (4.0)</th>
                <th className="py-3 px-4 text-center">Attendance</th>
                <th className="py-3 px-4 text-right rounded-r-xl">Academic Standing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs text-slate-800 dark:text-[#f8fafc]">
              {cohortLeaderboard.map((s) => {
                const isYou = s.id === student.id;
                return (
                  <tr
                    key={s.id}
                    className={`transition-colors ${
                      isYou
                        ? 'bg-amber-50/70 dark:bg-gold/10 border-l-2 border-gold font-semibold'
                        : 'hover:bg-slate-50 dark:hover:bg-[#201f22]/40'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold">
                      {s.rank === 1 ? (
                        <span className="text-[#b8860b] dark:text-gold-bright">🥇 #01</span>
                      ) : s.rank === 2 ? (
                        <span className="text-slate-600 dark:text-[#b9c8de]">🥈 #02</span>
                      ) : s.rank === 3 ? (
                        <span className="text-amber-700 dark:text-[#cd7f32]">🥉 #03</span>
                      ) : (
                        <span className={isYou ? 'text-[#b8860b] dark:text-gold-bright' : 'text-slate-500 dark:text-[#94a3b8]'}>
                          #{s.rank.toString().padStart(2, '0')}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
                        />
                        <span className={`text-xs ${isYou ? 'text-[#b8860b] dark:text-gold-bright font-bold' : 'text-slate-900 dark:text-[#f8fafc]'}`}>
                          {s.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 dark:text-[#94a3b8]">{s.department}</td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold tabular-nums">
                      {s.gpa.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono tabular-nums text-emerald-600 dark:text-[#58e7aa]">
                      {s.attendanceRate}%
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          isYou
                            ? 'bg-gold/20 text-[#b8860b] dark:text-gold-bright border border-gold/30'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-[#94a3b8]'
                        }`}
                      >
                        {s.standing}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};