import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto p-4 rounded-2xl bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 shadow-2xl flex items-start gap-3 animate-in slide-in-from-bottom-3 fade-in duration-200 transition-colors"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-[#58e7aa]" />}
            {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-rose-600 dark:text-[#ffb4ab]" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#b8860b] dark:text-gold" />}
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-bold text-xs text-slate-900 dark:text-[#f8fafc]">{toast.title}</span>
            <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] leading-relaxed mt-0.5">{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 dark:text-[#94a3b8] hover:text-slate-800 dark:hover:text-white shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
