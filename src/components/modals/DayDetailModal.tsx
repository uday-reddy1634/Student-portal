import React from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, CheckCircle2, Clock, MapPin, X, AlertTriangle, ShieldCheck } from 'lucide-react';

export const DayDetailModal: React.FC = () => {
  const { selectedDayDetail, closeDayDetail, showToast } = useApp();

  if (!selectedDayDetail) return null;

  const isPresent = selectedDayDetail.status === 'present';
  const isLate = selectedDayDetail.status === 'late';
  const isAbsent = selectedDayDetail.status === 'absent';
  const isExcused = selectedDayDetail.status === 'excused';

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#b8860b] dark:text-gold" />
            <h3 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
              Daily Attendance Detail
            </h3>
          </div>
          <button onClick={closeDayDetail} className="text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900 dark:text-[#f8fafc]">{selectedDayDetail.dateStr}</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              isPresent
                ? 'bg-emerald-100 text-emerald-800 dark:bg-[#10b981]/20 dark:text-[#58e7aa]'
                : isLate
                ? 'bg-slate-200 text-slate-700 dark:bg-[#b9c8de]/20 dark:text-[#b9c8de]'
                : isAbsent
                ? 'bg-rose-100 text-rose-800 dark:bg-[#ef4444]/20 dark:text-[#ffb4ab]'
                : 'bg-amber-100 text-amber-800 dark:bg-gold/20 dark:text-gold-bright'
            }`}
          >
            {selectedDayDetail.status.toUpperCase()}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex flex-col gap-2 text-xs">
          <div className="flex justify-between text-slate-500 dark:text-[#94a3b8]">
            <span>Sessions Conducted:</span>
            <span className="text-slate-900 dark:text-[#f8fafc] font-bold">{selectedDayDetail.sessionsCount || 3} Units</span>
          </div>
          <div className="flex justify-between text-slate-500 dark:text-[#94a3b8]">
            <span>Verified Present:</span>
            <span className="text-emerald-600 dark:text-[#58e7aa] font-bold">{selectedDayDetail.attendedCount || 0} Units</span>
          </div>
          <div className="flex justify-between text-slate-500 dark:text-[#94a3b8]">
            <span>Audit Mechanism:</span>
            <span className="text-slate-800 dark:text-[#f8fafc]">RFID Turnstile + Dirac Biometrics</span>
          </div>
        </div>

        {selectedDayDetail.details && (
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-[#94a3b8]">
            <strong className="text-[#b8860b] dark:text-gold-bright">Registrar Note:</strong> {selectedDayDetail.details}
          </div>
        )}

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
          <button
            onClick={closeDayDetail}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs font-semibold dark:text-[#f8fafc]"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};
