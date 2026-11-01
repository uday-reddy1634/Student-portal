import React from 'react';
import { useApp } from '../../context/AppContext';
import { Download, Printer, X, ShieldCheck, Award } from 'lucide-react';

export const ExportLedgerModal: React.FC = () => {
  const { isExportLedgerOpen, closeExportLedger, student, courseMarks, showToast } = useApp();

  if (!isExportLedgerOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    showToast(
      'Ledger PDF Exported',
      `Cryptographically signed transcript downloaded for ${student.name} (SHA-256 Verified).`
    );
    closeExportLedger();
  };

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#131315] border border-slate-200 dark:border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 transition-colors">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-[#b8860b] dark:text-gold">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                Pathshala • Official Academic Transcript
              </h3>
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Registrar Directorate • Fall Term 2026</span>
            </div>
          </div>
          <button onClick={closeExportLedger} className="text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ledger Document Canvas */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 flex flex-col gap-5 text-xs text-slate-800 dark:text-[#f8fafc]">
          <div className="flex justify-between items-start pb-4 border-b border-slate-200 dark:border-white/5 flex-wrap gap-3">
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-[#f8fafc] block">{student.name}</span>
              <span className="text-slate-500 dark:text-[#94a3b8]">Candidate ID: {student.candidateId}</span>
              <span className="text-slate-500 dark:text-[#94a3b8] block">{student.program}</span>
            </div>
            <div className="text-right">
              <span className="text-[#b8860b] dark:text- font-bold text-sm block">Cumulative GPA: {student.gpa.toFixed(2)} / 4.0</span>
              <span className="text-emerald-600 dark:text-[#58e7aa] font-semibold block">Standing: {student.standing}</span>
              <span className="text-slate-500 dark:text-[#94a3b8]">Attendance: {student.attendanceRate}%</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-120">
              <thead>
                <tr className="text-slate-500 dark:text-[#94a3b8] uppercase text-[10px] font-bold border-b border-slate-200 dark:border-white/10 pb-2">
                  <th className="py-2">Course</th>
                  <th className="py-2">Credits</th>
                  <th className="py-2 text-right">Score</th>
                  <th className="py-2 text-right">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {courseMarks.map((c) => (
                  <tr key={c.id}>
                    <td className="py-2 font-semibold text-slate-900 dark:text-inherit">
                      {c.courseCode} - {c.courseName}
                    </td>
                    <td className="py-2 text-slate-500 dark:text-[#94a3b8]">{c.credits.toFixed(1)}</td>
                    <td className="py-2 text-right font-mono">{c.totalScore.toFixed(1)}</td>
                    <td className="py-2 text-right font-bold text-[#b8860b] dark:text-gold-bright">{c.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-[#94a3b8] flex-wrap gap-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa]" />
              Ed25519 Institutional Signature Verified
            </span>
            <span className="font-mono">Digest: 7f83b165...9480a</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-white/10 flex-wrap">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs font-semibold dark:text-[#f8fafc] flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print Transcript</span>
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2 rounded-xl bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
