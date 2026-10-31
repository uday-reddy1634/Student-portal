import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UploadCloud, X, Lock, Terminal } from 'lucide-react';

export const SubmitDeliverableModal: React.FC = () => {
  const { isSubmitModalOpen, selectedAssignmentForSubmit, closeSubmitModal, submitAssignment } = useApp();
  const [fileName, setFileName] = useState('vance_elena_deliverable_final.tar.gz');
  const [submitting, setSubmitting] = useState(false);

  if (!isSubmitModalOpen || !selectedAssignmentForSubmit) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      submitAssignment(selectedAssignmentForSubmit.id, fileName);
    }, 700);
  };

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-[#b8860b] dark:text-gold" />
            <h3 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
              Submit Scholastic Deliverable
            </h3>
          </div>
          <button onClick={closeSubmitModal} className="text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-gold/20 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
              {selectedAssignmentForSubmit.courseCode}
            </span>
            <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
              {selectedAssignmentForSubmit.title}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">
            {selectedAssignmentForSubmit.rubricSummary}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="p-6 rounded-xl border border-dashed border-gold/40 bg-slate-50 dark:bg-[#201f22]/50 hover:bg-slate-100 dark:hover:bg-[#201f22] flex flex-col items-center justify-center text-center cursor-pointer transition-all">
            <Terminal className="w-8 h-8 text-[#b8860b] dark:text-gold mb-2" />
            <span className="text-xs font-bold text-slate-900 dark:text-[#f8fafc]">Staged File: {fileName}</span>
            <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] mt-1 break-all">
              Encrypted SHA-256 Digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] uppercase font-semibold text-slate-600 dark:text-[#94a3b8]">Filename</label>
            <input
              type="text"
              required
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-[#f8fafc] focus:outline-none focus:border-gold"
            />
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-[#94a3b8]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-[#58e7aa]" />
              End-to-End PGP Encryption & Timestamp Certification
            </span>
            <span className="text-emerald-600 dark:text-[#58e7aa] font-bold">Active</span>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
            <button
              type="button"
              onClick={closeSubmitModal}
              className="px-4 py-2 rounded-xl text-xs text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 rounded-xl bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              <UploadCloud className="w-4 h-4" />
              <span>{submitting ? 'Transmitting...' : 'Upload & Certify Submission'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};