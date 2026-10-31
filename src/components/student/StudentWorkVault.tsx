import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FolderKanban,
  FileText,
  UploadCloud,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  Lock,
  Filter,
  RefreshCw,
  Terminal,
  BookOpen,
  History,
  FileCode,
} from 'lucide-react';
import { StudentFeedback } from './StudentFeedback';

export const StudentWorkVault: React.FC = () => {
  const {
    assignments,
    syllabusList,
    workSubTab,
    setWorkSubTab,
    openSubmitModal,
    showToast,
  } = useApp();

  const [filterSubject, setFilterSubject] = useState('all');
  const [filterFormat, setFilterFormat] = useState('all');
  const [activeFilterTab, setActiveFilterTab] = useState<'active' | 'submitted' | 'graded'>('active');

  const filteredAssignments = assignments.filter((asg) => {
    if (activeFilterTab === 'active') return asg.status === 'pending';
    if (activeFilterTab === 'submitted') return asg.status === 'submitted';
    if (activeFilterTab === 'graded') return asg.status === 'graded';
    return true;
  });

  const filteredSyllabus = syllabusList.filter((syl) => {
    if (filterSubject !== 'all' && syl.courseCode !== filterSubject) return false;
    if (filterFormat !== 'all' && syl.format !== filterFormat) return false;
    return true;
  });

  const handleDownloadSyllabus = (title: string, format: string) => {
    showToast('Vault Download Initiated', `Secure delivery package generated for ${title} (${format}).`);
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Header & Segmented Controller */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between bg-white dark:bg-[#1c1b1d]/90 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl relative overflow-hidden transition-colors">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[#b8860b] dark:text-gold-bright text-[11px] uppercase font-bold tracking-widest mb-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#58e7aa]" />
            <span>Honors Portfolio & Guidance</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] tracking-tight font-['Plus_Jakarta_Sans']">
            Academic Work & Mentorship
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94a3b8] max-w-xl mt-1 leading-relaxed">
            Centralized scholastic deliverables, peer-reviewed syllabus lecture archives, and direct faculty performance audits for Semester VII.
          </p>
        </div>

        {/* Segmented View Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#0e0e10]/80 border border-slate-200 dark:border-white/5 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setWorkSubTab('work')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              workSubTab === 'work'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-[#2a2a2c] dark:text-gold-bright dark:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc]'
            }`}
          >
            <FolderKanban className="w-4 h-4 text-[#b8860b] dark:text-gold-bright" />
            <span>Work Section</span>
            <span className="px-1.5 py-0.5 rounded-full bg-gold/20 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
              2 Pending
            </span>
          </button>

          <button
            onClick={() => setWorkSubTab('feedback')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              workSubTab === 'feedback'
                ? 'bg-white text-slate-900 shadow-sm dark:bg-[#2a2a2c] dark:text-gold-bright dark:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc]'
            }`}
          >
            <Eye className="w-4 h-4 text-[#b8860b] dark:text-gold-bright" />
            <span>Faculty Feedback & Suggestions</span>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-[#201f22] text-slate-600 dark:text-[#94a3b8] text-[10px] font-bold">
              3 Reviews
            </span>
          </button>
        </div>
      </div>

      {/* RENDER VIEW: WORK OR FEEDBACK */}
      {workSubTab === 'feedback' ? (
        <StudentFeedback />
      ) : (
        <div className="flex flex-col gap-6">
          {/* Quick Metric Ribbons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/80 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-between transition-colors">
              <div className="flex items-center justify-between text-slate-500 dark:text-[#94a3b8]">
                <span className="text-[10px] uppercase font-semibold tracking-wider">Submissions On Track</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa]" />
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">94.2%</span>
                <span className="text-xs text-emerald-600 dark:text-[#58e7aa] font-semibold">+3.1% vs Cohort</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/80 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-between transition-colors">
              <div className="flex items-center justify-between text-slate-500 dark:text-[#94a3b8]">
                <span className="text-[10px] uppercase font-semibold tracking-wider">Upcoming Deadline</span>
                <Clock className="w-4 h-4 text-[#b8860b] dark:text-gold" />
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">36h 14m</span>
                <span className="text-xs text-[#b8860b] dark:text-gold-bright font-semibold">MATH-702 PSIV</span>
                </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/80 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-between transition-colors">
              <div className="flex items-center justify-between text-slate-500 dark:text-[#94a3b8]">
                <span className="text-[10px] uppercase font-semibold tracking-wider">Repository Volume</span>
                <BookOpen className="w-4 h-4 text-slate-600 dark:text-[#b9c8de]" />
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] tabular-nums">148</span>
                <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Annotated Assets</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/80 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col justify-between transition-colors">
              <div className="flex items-center justify-between text-slate-500 dark:text-[#94a3b8]">
                <span className="text-[10px] uppercase font-semibold tracking-wider">Term Cumulative Avg</span>
                <span className="text-xs text-[#b8860b] dark:text-gold font-bold">Summa</span>
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-3xl font-extrabold text-[#b8860b] dark:text-gold-bright font-['Plus_Jakarta_Sans'] tabular-nums">3.96</span>
                <span className="text-xs text-slate-400 dark:text-[#94a3b8]">/ 4.00</span>
              </div>
            </div>
          </div>

          {/* Assignments Management Hub */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-[#b8860b] dark:text-gold" />
                <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                  Active Assignments & Term Submissions
                </h2>
              </div>

              {/* Status Segment Filters */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/5 overflow-x-auto">
                <button
                  onClick={() => setActiveFilterTab('active')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFilterTab === 'active'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-[#2a2a2c] dark:text-gold-bright'
                      : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc]'
                  }`}
                >
                  Active ({assignments.filter((a) => a.status === 'pending').length})
                </button>
                <button
                  onClick={() => setActiveFilterTab('submitted')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFilterTab === 'submitted'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-[#2a2a2c] dark:text-gold-bright'
                      : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc]'
                  }`}
                >
                  Submitted ({assignments.filter((a) => a.status === 'submitted').length})
                </button>
                <button
                  onClick={() => setActiveFilterTab('graded')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFilterTab === 'graded'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-[#2a2a2c] dark:text-gold-bright'
                      : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f8fafc]'
                  }`}
                >
                  Evaluated ({assignments.filter((a) => a.status === 'graded').length})
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Assignment Feed (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                {filteredAssignments.map((asg) => (
                  <div
                    key={asg.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col gap-4 relative overflow-hidden transition-colors"
                  >
                    {asg.status === 'pending' && (
                      <div className="absolute top-0 left-0 h-full w-1.5 bg-gold"></div>
                    )}
                    {asg.status === 'submitted' && (
                      <div className="absolute top-0 left-0 h-full w-1.5 bg-slate-400 dark:bg-[#39485a]"></div>
                    )}
                    {asg.status === 'graded' && (
                      <div className="absolute top-0 left-0 h-full w-1.5 bg-emerald-500 dark:bg-[#10b981]"></div>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-3 pl-1">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
                            {asg.courseCode}
                          </span>
-                           <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
{asg.courseName}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans'] mt-1">
                          {asg.title}
                        </h3>
                      </div>

                      <div className="flex flex-col items-end">
                        {asg.status === 'pending' && (
                          <>
                            <span className="text-xs text-rose-600 dark:text-[#ffb4ab] font-bold flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> {asg.dueText}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] mt-0.5">{asg.dueTimeFormatted}</span>
                          </>
                        )}
                        {asg.status === 'submitted' && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-[#10b981]/15 dark:text-[#58e7aa] text-xs font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Submitted on Time
                          </span>
                        )}
                        {asg.status === 'graded' && (
                          <div className="flex items-baseline gap-1 px-3 py-1 rounded-full bg-gold/15 text-[#b8860b] dark:text-gold-bright font-bold text-sm">
                            {asg.score} / {asg.maxScore} <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] ml-1">Grade A+</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-[#94a3b8] leading-relaxed pl-1">
                      {asg.description}
                    </p>

                    {/* Progress bar if draft in progress */}
                    {asg.status === 'pending' && (
                      <div className="flex flex-col gap-1.5 pt-1 pl-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500 dark:text-[#94a3b8]">Draft Completion</span>
                          <span className="text-[#b8860b] dark:text-gold-bright font-bold">{asg.completionPercentage}% Structured</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-[#2a2a2c] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gold rounded-full"
                            style={{ width: `${asg.completionPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Submitted details box */}
                    {asg.status === 'submitted' && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs pl-3 flex-wrap gap-2">
                        <div className="flex items-center gap-2 truncate">
                          <Terminal className="w-4 h-4 text-[#b8860b] dark:text-gold" />
                          <span className="font-semibold text-slate-900 dark:text-[#f8fafc] truncate">{asg.submittedFileName}</span>
                          <span className="text-slate-500 dark:text-[#94a3b8] text-[11px]">(14.8 MB • SHA-256 Verified)</span>
                        </div>
                        <span className="text-emerald-600 dark:text-[#58e7aa] font-semibold text-[11px]">Evaluation in Progress</span>
                      </div>
                    )}

                    {/* Faculty comment */}
                    {asg.facultyComment && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-[#94a3b8] pl-3">
                        <strong className="text-[#b8860b] dark:text-gold-bright">Faculty Comment:</strong> "{asg.facultyComment}"
                      </div>
                    )}

                    {/* Action controls */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pl-1 border-t border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-[#94a3b8] flex-wrap">
                        <span>Rubric: {asg.rubricSummary}</span>
                        <span>•</span>
                        <span>{asg.instructor}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => showToast('Rubric Inspected', `Rubric criteria loaded for ${asg.title}.`)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs dark:text-[#f8fafc] font-semibold transition-all flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Rubric</span>
                        </button>
                        <button
                          onClick={() => openSubmitModal(asg)}
                          className="px-4 py-1.5 rounded-lg bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                        >
                          <UploadCloud className="w-3.5 h-3.5" />
                          <span>{asg.status === 'submitted' ? 'Update Draft' : 'Quick Submit'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Upload & Dropzone Side Panel (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col gap-4 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                      Direct Vault Upload
                    </h3>
                    <UploadCloud className="w-4 h-4 text-[#b8860b] dark:text-gold" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">
                    Stage artifacts, supplementary research notebooks, and lab archives directly into your faculty review channel.
                  </p>

                  {/* Drag and Drop Zone */}
                  <div
                    onClick={() => openSubmitModal(assignments[0])}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 hover:bg-slate-100 dark:hover:bg-[#201f22] border border-dashed border-gold/40 hover:border-gold transition-all cursor-pointer text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-[#b8860b] dark:text-gold mb-2 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs text-slate-900 dark:text-[#f8fafc]">Drag & drop deliverable</span>
                    <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] mt-0.5">PDF, DOCX, ZIP or IPYNB (Max 120MB)</span>
                    <button className="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-[#2a2a2c] text-[#b8860b] dark:text-gold-bright group-hover:bg-gold group-hover:text-obsidian transition-all">
                      Browse Workstation
                    </button>
                  </div>

                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94a3b8]">
                      Active Assignment Target
                    </span>
                    <select className="w-full bg-slate-50 dark:bg-[#201f22] text-slate-800 dark:text-[#f8fafc] text-xs p-2 rounded-xl border border-slate-200 dark:border-white/10 focus:outline-none focus:border-gold">
                      <option>MATH-702: Problem Set IV (Topology)</option>
                      <option>CS-512: Byzantine Raft Protocol</option>
                      <option>NEUR-401: Synaptic Weight Decay</option>
                    </select>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-[#94a3b8]">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-[#58e7aa]" /> End-to-End PGP Encryption
                    </span>
                    <span className="text-[#b8860b] dark:text-gold-bright font-bold">Active</span>
                  </div>
                </div>

                {/* Milestone Timeline Mini View */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col gap-3 transition-colors">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94a3b8]">
                    Milestone Timeline
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold"></span>
                        <span className="text-slate-800 dark:text-[#f8fafc]">Topology Manifold PSIV</span>
                      </div>
                      <span className="text-slate-500 dark:text-[#94a3b8] font-mono">Oct 24</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-[#b9c8de]"></span>
                        <span className="text-slate-800 dark:text-[#f8fafc]">AI Epistemic Framework Draft</span>
                      </div>
                      <span className="text-slate-500 dark:text-[#94a3b8] font-mono">Oct 29</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#58e7aa]"></span>
                        <span className="text-slate-800 dark:text-[#f8fafc]">DSGE Macroeconomic Paper</span>
                      </div>
                      <span className="text-slate-500 dark:text-[#94a3b8] font-mono">Nov 04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Syllabus Repository & Lecture Vault */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#b8860b] dark:text-gold" />
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                    Syllabus Repository & Lecture Vault
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-[#94a3b8]">
                    Download official faculty slide decks, seminar transcripts, and curated derivations.
                  </p>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value)}
                  className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#f8fafc] text-xs px-3 py-1.5 rounded-xl focus:outline-none focus:border-gold"
                >
                  <option value="all">All Subjects (4 Courses)</option>
                  <option value="MATH-702">MATH-702 (Topology)</option>
                  <option value="CS-512">CS-512 (Consensus)</option>
                  <option value="BIO-410">BIO-410 (Genetics)</option>
                  <option value="CS-801">CS-801 (Distributed Systems)</option>
                </select>

                <select
                  value={filterFormat}
                  onChange={(e) => setFilterFormat(e.target.value)}
                  className="bg-white dark:bg-[#1c1b1d] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#f8fafc] text-xs px-3 py-1.5 rounded-xl focus:outline-none focus:border-gold"
                >
                  <option value="all">All Formats (PDF, EPUB, Slides)</option>
                  <option value="PDF">PDF Documents</option>
                  <option value="SLIDES">Keynote / Slides</option>
                  <option value="EPUB">EPUB Monograph</option>
                </select>

                <button
                  onClick={() => {
                    setFilterSubject('all');
                    setFilterFormat('all');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-[#2a2a2c] dark:text-[#94a3b8] dark:hover:text-white text-xs flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Repository Table */}
            <div className="overflow-x-auto rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm transition-colors">
              <table className="w-full text-left border-collapse min-w-160">
                <thead>
                  <tr className="bg-slate-100 dark:bg-[#201f22]/70 text-slate-600 dark:text-[#94a3b8] text-[10px] uppercase font-bold tracking-wider">
                    <th className="py-3 px-4">Document & Topic</th>
                    <th className="py-3 px-4">Subject / Course</th>
                    <th className="py-3 px-4">Instructor</th>
                    <th className="py-3 px-4">Date Uploaded</th>
                    <th className="py-3 px-4">Format & Size</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs text-slate-800 dark:text-[#f8fafc]">
                  {filteredSyllabus.map((syl) => (
                    <tr key={syl.id} className="hover:bg-slate-50 dark:hover:bg-[#201f22]/40 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-rose-100 dark:bg-[#ef4444]/15 text-rose-600 dark:text-[#ffb4ab] flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">{syl.title}</span>
                            <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">{syl.subtitle}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 rounded-md bg-gold/15 text-[#b8860b] dark:text-gold-bright font-mono font-bold text-[10px]">
                          {syl.courseCode}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-700 dark:text-inherit">{syl.instructor}</td>
                      <td className="py-4 px-4 text-slate-500 dark:text-[#94a3b8]">{syl.dateUploaded}</td>
                      <td className="py-4 px-4">
                        <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] font-mono">
-                           {syl.format}
{syl.fileSize}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => handleDownloadSyllabus(syl.title, syl.format)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-gold hover:text-obsidian text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-gold dark:hover:text-obsidian dark:text-[#f8fafc] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};