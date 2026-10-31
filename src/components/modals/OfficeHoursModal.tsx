import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, Clock, X, MessageSquare, User, Sparkles } from 'lucide-react';

export const OfficeHoursModal: React.FC = () => {
  const { isOfficeHoursModalOpen, officeHoursInstructor, closeOfficeHoursModal, requestOfficeHours } = useApp();
  const [selectedTime, setSelectedTime] = useState('Tomorrow 14:00 - 14:30');
  const [notes, setNotes] = useState('');

  if (!isOfficeHoursModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    requestOfficeHours(officeHoursInstructor, selectedTime, notes);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#b8860b] dark:text-gold" />
            <h3 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
              Request 1-on-1 Office Hours
            </h3>
          </div>
          <button onClick={closeOfficeHoursModal} className="text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-[#b8860b] dark:text-gold font-bold">
            <User className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">{officeHoursInstructor}</span>
            <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">Senior Faculty • Priority Advisor Queue</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] uppercase font-semibold text-slate-600 dark:text-[#94a3b8]">Select Available Slot</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-gold"
            >
              <option>Tomorrow 14:00 - 14:30 (Dirac Lab 12)</option>
              <option>Tomorrow 16:30 - 17:00 (Virtual High-Bandwidth)</option>
              <option>Friday 11:00 - 11:30 (Turing Wing 402B)</option>
              <option>Monday 10:00 - 10:30 (Faculty Office)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] uppercase font-semibold text-slate-600 dark:text-[#94a3b8]">Discussion Agenda / Inquiry</label>
            <textarea
              rows={3}
              required
              placeholder="e.g. Discuss Ricci curvature flow paper submission for Spring Oxford Symposium..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl p-3 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-gold resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={closeOfficeHoursModal}
              className="px-4 py-2 rounded-xl text-xs text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Confirm Appointment</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
