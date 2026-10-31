import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
  X,
} from 'lucide-react';

export const StudentAttendance: React.FC = () => {
  const {
    septemberDays,
    octoberDays,
    courseAttendance,
    openDayDetail,
    openExportLedger,
    showToast,
  } = useApp();

  const [selectedTerm, setSelectedTerm] = useState('fall-2026');
  const [showCorrectionModal, setShowCorrectionModal] = useState(false);
  const [correctionDay, setCorrectionDay] = useState('');
  const [correctionReason, setCorrectionReason] = useState('');

  const handleRequestCorrection = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCorrectionModal(false);
    showToast(
      'Attendance Dispute Dispatched',
      `Audit request for ${correctionDay || 'Oct 09'} submitted to Department Dean under 72h SLA review.`
    );
    setCorrectionDay('');
    setCorrectionReason('');
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Command Header & Export Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 bg-white dark:bg-[#1c1b1d]/90 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200/90 dark:border-white/5 shadow-sm relative overflow-hidden transition-colors duration-200">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-1 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#b8860b] dark:text-gold-bright uppercase font-bold tracking-wider">
              Aura Academic Registry
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Live Synchronized Ledger</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] tracking-tight font-['Plus_Jakarta_Sans']">
            Attendance & Academic Performance Tracking
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] max-w-2xl leading-relaxed mt-1">
            Review real-time verification logs, mandatory contact hour thresholds (75.0%), and syllabus evaluation rubrics for Dean's List eligibility.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 z-10">
          {/* Term Selector */}
          <div className="relative bg-slate-100 dark:bg-[#2a2a2c] px-3.5 py-2 rounded-xl flex items-center gap-2 border border-slate-200 dark:border-white/5 shadow-xs">
            <Calendar className="w-4 h-4 text-[#b8860b] dark:text-gold" />
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="bg-transparent text-slate-800 dark:text-[#f8fafc] text-xs font-semibold focus:outline-none cursor-pointer pr-2 appearance-none"
            >
              <option value="fall-2026" className="bg-white dark:bg-[#1c1b1d]">Fall Semester 2026</option>
              <option value="spring-2026" className="bg-white dark:bg-[#1c1b1d]">Spring Semester 2026</option>
              <option value="fall-2025" className="bg-white dark:bg-[#1c1b1d]">Fall Semester 2025</option>
            </select>
          </div>

          {/* Quick Export Dossier Button */}
          <button
            onClick={openExportLedger}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#b8860b] dark:bg-gold text-white dark:text-obsidian text-xs font-bold hover:brightness-105 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Export Official Ledger (PDF)</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: Key Aggregate Thresholds & Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Stat 1: Scheduled Lectures */}
        <div className="bg-white dark:bg-[#1c1b1d]/80 p-5 rounded-2xl border border-slate-200/90 dark:border-white/5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] uppercase font-semibold tracking-wider">
              Scheduled Lectures
            </span>
            <Clock className="w-4 h-4 text-slate-400 dark:text-[#b9c8de]" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
              142
            </span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8] block mt-1">Conducted Sessions</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-[#2a2a2c] h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-slate-400 dark:bg-[#b9c8de] h-full rounded-full w-full"></div>
          </div>
        </div>

        {/* Stat 2: Attended Units */}
        <div className="bg-white dark:bg-[#1c1b1d]/80 p-5 rounded-2xl border border-slate-200/90 dark:border-white/5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#b8860b] dark:text-gold-bright uppercase font-semibold tracking-wider">
              Attended Units
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#b8860b] dark:text-gold" />
          </div>
          <div className="mt-4">
            <span className="text-3xl font-extrabold text-[#b8860b] dark:text-gold-bright font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
              137
            </span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8] block mt-1">Verified In-Room / Lab</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-[#2a2a2c] h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-[#b8860b] dark:bg-gold h-full rounded-full" style={{ width: '96.4%' }}></div>
          </div>
        </div>

        {/* Stat 3: Absences & Excused */}
        <div className="bg-white dark:bg-[#1c1b1d]/80 p-5 rounded-2xl border border-slate-200/90 dark:border-white/5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-red-600 dark:text-[#ffb4ab] uppercase font-semibold tracking-wider">
              Absences & Excused
            </span>
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-[#ffb4ab]" />
          </div>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums leading-none">
              3
            </span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Abs.</span>
            <span className="text-slate-400">/</span>
            <span className="text-lg font-bold text-slate-700 dark:text-[#b9c8de]">2</span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Exc.</span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] block mt-1">Dean Medical Approvals</span>
          <div className="w-full bg-slate-100 dark:bg-[#2a2a2c] h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-red-500 dark:bg-[#ef4444] h-full rounded-full" style={{ width: '4%' }}></div>
          </div>
        </div>

        {/* Stat 4: Statutory Compliance 75% Rule (Spans 2 columns on lg) */}
        <div className="bg-white dark:bg-[#1c1b1d]/80 p-5 rounded-2xl border border-slate-200/90 dark:border-white/5 flex flex-col justify-between shadow-xs lg:col-span-2 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-amber-500/10 dark:from-gold/10 to-transparent pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa]" />
              <span className="text-[10px] text-emerald-700 dark:text-[#58e7aa] uppercase font-bold tracking-wider">
                Statutory Standing: High Compliance
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-[#33ca90]/20 text-emerald-700 dark:text-[#58e7aa] text-[10px] font-bold">
              +21.4% Buffer
            </span>
          </div>

          <div className="flex items-end justify-between mt-3">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">
                  96.4%
                </span>
                <span className="text-xs text-slate-500 dark:text-[#94a3b8]">cumulative</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8] mt-0.5 block">
                Minimum accreditation requirement: 75.0%
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#b8860b] dark:text-gold-bright font-bold block">Safe Margin</span>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Can miss up to 30 sessions safely</span>
            </div>
          </div>

          {/* Dual Threshold Meter */}
          <div className="relative w-full bg-slate-100 dark:bg-[#2a2a2c] h-2.5 rounded-full mt-3 overflow-hidden">
            <div
              className="absolute left-[75%] top-0 bottom-0 w-1 bg-red-500 dark:bg-[#ef4444] z-10"
              title="75% Regulatory Floor"
            ></div>
            <div className="bg-[#b8860b] dark:bg-gold h-full rounded-full" style={{ width: '96.4%' }}></div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Attendance Heatmap & Subject-wise Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left: 60-day interactive attendance calendar (7 cols) */}
        <div className="xl:col-span-7 bg-white dark:bg-[#1c1b1d]/80 p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-white/5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/5">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                  Curriculum Attendance Matrix
                </h2>
                <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                  Bi-monthly micro-audit (September – October 2026)
                </span>
              </div>

              {/* Legend Chips */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#201f22] text-slate-600 dark:text-[#94a3b8] text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-[#b8860b] dark:bg-gold"></span>
                  <span>Present</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#201f22] text-slate-600 dark:text-[#94a3b8] text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-[#b9c8de]"></span>
                  <span>Late (+10m)</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#201f22] text-slate-600 dark:text-[#94a3b8] text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-red-500 dark:bg-[#ef4444]"></span>
                  <span>Unexcused</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#201f22] text-slate-600 dark:text-[#94a3b8] text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#10b981]"></span>
                  <span>Excused</span>
                </div>
              </div>
            </div>

            {/* September Block */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">September 2026</span>
                <span className="text-[11px] text-[#b8860b] dark:text-gold-bright font-semibold">
                  98.1% Rate • 26/26 Recorded
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center text-slate-400 dark:text-[#94a3b8] text-[10px] font-semibold py-1">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="opacity-40">S</span><span className="opacity-40">S</span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                {septemberDays.map((d, idx) => {
                  if (d.status === 'empty') {
                    return <div key={idx} className="h-8 sm:h-9 rounded-lg bg-slate-100/50 dark:bg-[#201f22]/20"></div>;
                  }
                  if (d.status === 'weekend') {
                    return (
                      <div
                        key={idx}
                        className="h-8 sm:h-9 rounded-lg bg-slate-100 dark:bg-[#201f22]/30 flex items-center justify-center text-[10px] text-slate-400 dark:text-[#94a3b8]/40"
                      >
                        {d.day}
                      </div>
                    );
                  }

                  let dotColor = 'bg-[#b8860b] dark:bg-gold';
                  let ringColor = 'border-slate-200/80 dark:border-white/5';
                  if (d.status === 'late') {
                    dotColor = 'bg-slate-400 dark:bg-[#b9c8de]';
                    ringColor = 'border-slate-400/50 dark:border-[#b9c8de]/40';
                  } else if (d.status === 'absent') {
                    dotColor = 'bg-red-500 dark:bg-[#ef4444]';
                    ringColor = 'border-red-400/60 dark:border-[#ef4444]/60';
                  } else if (d.status === 'excused') {
                    dotColor = 'bg-emerald-500 dark:bg-[#10b981]';
                    ringColor = 'border-emerald-400/60 dark:border-[#10b981]/50';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => openDayDetail(d)}
                      className={`h-8 sm:h-9 rounded-lg bg-slate-50 dark:bg-[#201f22] hover:bg-slate-100 dark:hover:bg-[#2a2a2c] border ${ringColor} transition-all flex flex-col items-center justify-center relative group cursor-pointer`}
                      title={`${d.dateStr}: ${d.status}`}
                    >
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 dark:text-[#f8fafc]">{d.day}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-0.5`}></span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* October Block (Month to date) */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                  October 2026 (Month-to-Date)
                </span>
                <span className="text-[11px] text-emerald-700 dark:text-[#58e7aa] font-semibold">
                  95.4% Rate • 20/20 Recorded
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5 text-center text-slate-400 dark:text-[#94a3b8] text-[10px] font-semibold py-1">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span className="opacity-40">S</span><span className="opacity-40">S</span>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                {octoberDays.map((d, idx) => {
                  if (d.status === 'empty') {
                    return <div key={idx} className="h-8 sm:h-9 rounded-lg bg-slate-100/50 dark:bg-[#201f22]/20"></div>;
                  }
                  if (d.status === 'weekend') {
                    return (
                      <div
                        key={idx}
                        className="h-8 sm:h-9 rounded-lg bg-slate-100 dark:bg-[#201f22]/30 flex items-center justify-center text-[10px] text-slate-400 dark:text-[#94a3b8]/40"
                      >
                        {d.day}
                      </div>
                    );
                  }

                  let dotColor = 'bg-[#b8860b] dark:bg-gold';
                  let ringColor = 'border-slate-200/80 dark:border-white/5';
                  if (d.status === 'absent') {
                    dotColor = 'bg-red-500 dark:bg-[#ef4444]';
                    ringColor = 'border-red-400/60 dark:border-[#ef4444]/60';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => openDayDetail(d)}
                      className={`h-8 sm:h-9 rounded-lg bg-slate-50 dark:bg-[#201f22] hover:bg-slate-100 dark:hover:bg-[#2a2a2c] border ${ringColor} transition-all flex flex-col items-center justify-center relative group cursor-pointer`}
                      title={`${d.dateStr}: ${d.status}`}
                    >
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-800 dark:text-[#f8fafc]">{d.day}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-0.5`}></span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-4 pt-3 bg-slate-50 dark:bg-[#201f22]/50 p-3 rounded-xl border border-slate-200/70 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <span className="text-slate-500 dark:text-[#94a3b8]">
              Click any day coordinate to inspect timestamps and professor check-ins.
            </span>
            <span className="text-[11px] text-[#b8860b] dark:text-gold-bright font-semibold">
              RFID Card + Biometric Synced
            </span>
          </div>
        </div>

        {/* Right: Subject-wise Progress Rings & Breakdown (5 cols) */}
        <div className="xl:col-span-5 bg-white dark:bg-[#1c1b1d]/80 p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-white/5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                  Course Attendance
                </h2>
                <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                  Per-course minimum 75% fulfillment
                </span>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#b8860b] dark:text-gold" />
            </div>

            {/* Course List with Circular Rings */}
            <div className="flex flex-col gap-3 mt-4">
              {courseAttendance.map((ca) => {
                let statusBadgeColor = 'bg-amber-100 dark:bg-gold/15 text-[#b8860b] dark:text-gold-bright';
                let strokeColor = 'text-[#b8860b] dark:text-gold';
                if (ca.status === 'Safe') {
                  statusBadgeColor = 'bg-emerald-100 dark:bg-[#33ca90]/20 text-emerald-700 dark:text-[#58e7aa]';
                  strokeColor = 'text-emerald-600 dark:text-[#58e7aa]';
                } else if (ca.status === 'Good') {
                  statusBadgeColor = 'bg-slate-100 dark:bg-[#39485a]/40 text-slate-700 dark:text-[#b9c8de]';
                  strokeColor = 'text-slate-500 dark:text-[#b9c8de]';
                }

                return (
                  <div
                    key={ca.courseCode}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 hover:bg-slate-100/80 dark:hover:bg-[#201f22] border border-slate-200/70 dark:border-white/5 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {/* Inline Circular Progress SVG */}
                      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                        <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-slate-200 dark:text-[#2a2a2c] stroke-current"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3.5"
                          />
                          <path
                            className={`${strokeColor} stroke-current`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeDasharray={`${ca.rate}, 100`}
                            strokeLinecap="round"
                            strokeWidth="3.5"
                          />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-slate-900 dark:text-[#f8fafc] tabular-nums">
                          {ca.rate}%
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-900 dark:text-[#f8fafc] leading-tight">
                          {ca.courseName}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-0.5">
-                           {ca.courseCode}
{ca.attended} / {ca.total} Sessions
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${statusBadgeColor}`}>
                      {ca.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
            <button
              onClick={() => setShowCorrectionModal(true)}
              className="text-xs text-[#b8860b] dark:text-gold-bright hover:underline font-semibold flex items-center gap-1"
            >
              <span>Request attendance correction</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] text-slate-400 dark:text-[#94a3b8]">Policy: 72hr dispute window</span>
          </div>
        </div>
      </div>

      {/* Correction Dispute Modal */}
      {showCorrectionModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                Submit Attendance Dispute
              </h3>
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="text-slate-400 hover:text-slate-800 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-[#94a3b8]">
              Dispute turnstile or biometric sync errors within 72 hours of timestamp occurrence. Verified supporting passes will be forwarded to Department Chair.
            </p>

            <form onSubmit={handleRequestCorrection} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8]">
                  Date of Discrepancy
                </label>
                <input
                  type="date"
                  required
                  value={correctionDay}
                  onChange={(e) => setCorrectionDay(e.target.value)}
                  className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-[#b8860b] dark:focus:border-gold"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8]">
                  Affected Course
                </label>
                <select className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-[#b8860b] dark:focus:border-gold">
                  <option>CS-482 Quantum Algorithms</option>
                  <option>CS-301 Advanced Data Structures</option>
                  <option>DS-209 UI/UX Systems</option>
                  <option>AI-410 Applied Neural Networks</option>
                  <option>MA-302 Linear Algebra</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase font-semibold text-slate-500 dark:text-[#94a3b8]">
                  Reason / RFID Station Note
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Attended Hall IV lecture; turnstile scanner was offline during 10:00 entry..."
                  value={correctionReason}
                  onChange={(e) => setCorrectionReason(e.target.value)}
                  className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-[#b8860b] dark:focus:border-gold resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowCorrectionModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-500 dark:text-[#94a3b8] hover:text-slate-800 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#b8860b] dark:bg-gold text-white dark:text-obsidian text-xs font-bold hover:brightness-105"
                >
                  Transmit Dispute
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};