import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BarChart3,
  Filter,
  CheckCircle2,
  TrendingUp,
  Download,
  Calculator,
  Award,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

export const StudentMarks: React.FC = () => {
  const { student, courseMarks, openExportLedger, showToast } = useApp();
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'core' | 'electives'>('all');
  const [showSimulator, setShowSimulator] = useState(false);
  const [simulatedBoost, setSimulatedBoost] = useState(0);

  const filteredCourses = courseMarks.filter((c) => {
    if (categoryFilter === 'all') return true;
    return c.category === categoryFilter;
  });

  const totalCredits = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
  const qualityHonorPoints = filteredCourses.reduce((sum, c) => {
    const pointWeight = c.grade === 'A+' ? 4.0 : c.grade === 'A' ? 3.9 : 3.7;
    return sum + pointWeight * c.credits;
  }, 0);

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Gradebook Overview Header */}
      <div className="bg-white dark:bg-[#1c1b1d]/90 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] text-[#b8860b] dark:text-gold-bright uppercase font-bold tracking-wider">
              Official Course Gradebook
            </span>
            <span className="px-2 py-0.5 rounded bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
              GPA {student.gpa.toFixed(2)} / 4.0
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-[#f8fafc] tracking-tight font-['Plus_Jakarta_Sans']">
            Detailed Marks & Assessment Rubric
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94a3b8] max-w-xl mt-1 leading-relaxed">
            Semester VII Continuous Evaluation matrix, internal benchmarks, and relative cohort standing.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowSimulator(!showSimulator)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs font-semibold dark:text-[#f8fafc] border border-slate-200/60 dark:border-white/5 transition-all"
          >
            <Calculator className="w-4 h-4 text-[#b8860b] dark:text-gold" />
            <span>{showSimulator ? 'Close Simulator' : 'GPA Projection'}</span>
          </button>

          <button
            onClick={openExportLedger}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            <Download className="w-4 h-4" />
            <span>Export Official Grade Card</span>
          </button>
        </div>
      </div>

      {/* Simulator Drawer (What-If Projection) */}
      {showSimulator && (
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#201f22] border border-gold/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-[#b8860b] dark:text-gold-bright flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-[#f8fafc] block">
                Final Examination Honors Projection Simulator
              </span>
              <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">
                Adjust final project completion boost to preview GPA honors standing:
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={simulatedBoost}
              onChange={(e) => setSimulatedBoost(parseFloat(e.target.value))}
              className="accent-gold cursor-pointer w-48"
            />
            <div className="flex flex-col text-right min-w-25">
              <span className="text-xs text-slate-500 dark:text-[#94a3b8]">Projected GPA</span>
              <span className="text-lg font-extrabold text-[#b8860b] dark:text-gold-bright tabular-nums">
                {(student.gpa + simulatedBoost * 0.012).toFixed(2)} / 4.0
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Gradebook Table Container */}
      <div className="bg-white dark:bg-[#1c1b1d]/80 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col gap-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-[#f8fafc]">Registered Curriculum</span>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">({filteredCourses.length} Courses Listed)</span>
          </div>

          {/* Filter Dropdown */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="relative bg-slate-50 dark:bg-[#201f22] px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/5 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-500 dark:text-[#94a3b8]" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as any)}
                className="bg-transparent text-xs text-slate-800 dark:text-[#f8fafc] font-medium focus:outline-none cursor-pointer appearance-none pr-3"
              >
                <option value="all" className="bg-white dark:bg-[#1c1b1d]">All Disciplines (5 Courses)</option>
                <option value="core" className="bg-white dark:bg-[#1c1b1d]">Core Computer Science</option>
                <option value="electives" className="bg-white dark:bg-[#1c1b1d]">Electives & Design</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full text-left border-collapse min-w-160">
            <thead>
              <tr className="bg-slate-100 dark:bg-[#201f22]/70 text-slate-600 dark:text-[#94a3b8] text-[10px] uppercase font-bold tracking-wider rounded-xl">
                <th className="py-3 px-4 rounded-l-xl">Course Code</th>
                <th className="py-3 px-4">Course Name & Faculty</th>
                <th className="py-3 px-4 text-center">Credits</th>
                <th className="py-3 px-4 text-right">Mid-Term (30)</th>
                <th className="py-3 px-4 text-right">Internals (30)</th>
                <th className="py-3 px-4 text-right">Final/Project (40)</th>
                <th className="py-3 px-4 text-center">Grade</th>
                <th className="py-3 px-4 text-right rounded-r-xl">Percentile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs text-slate-800 dark:text-[#f8fafc]">
              {filteredCourses.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-[#201f22]/50 transition-colors group">
                  <td className="py-4 px-4 font-mono text-[#b8860b] dark:text-gold-bright font-bold">
                    {c.courseCode}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc] block">
                      {c.courseName}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">
-                       {c.instructor}
{c.scheduleTime}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center tabular-nums text-slate-600 dark:text-[#b9c8de]">
                    {c.credits.toFixed(1)}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums">
                    {c.midtermScore.toFixed(1)} <span className="text-[10px] text-slate-400 dark:text-[#94a3b8]">/30</span>
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums">
                    {c.internalsScore.toFixed(1)} <span className="text-[10px] text-slate-400 dark:text-[#94a3b8]">/30</span>
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums">
                    {c.finalScore.toFixed(1)} <span className="text-[10px] text-slate-400 dark:text-[#94a3b8]">/40</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-[#b8860b] dark:text-gold-bright font-bold text-[11px] border border-gold/30 shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                      {c.grade}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-emerald-600 dark:text-[#58e7aa] tabular-nums">
                    {c.percentile}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Aggregate Summary Strip */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-[#94a3b8]">
          <div className="flex items-center gap-4 flex-wrap">
            <span>
              Total Registered Credits: <strong className="text-slate-900 dark:text-[#f8fafc] font-bold">{totalCredits.toFixed(1)}</strong>
            </span>
            <span>•</span>
            <span>
              Quality Honor Points: <strong className="text-[#b8860b] dark:text-gold-bright font-bold">{qualityHonorPoints.toFixed(2)}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#b8860b] dark:text-gold-bright font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa]" />
            <span>Academic Board Dean's Standing: First Class Distinction</span>
          </div>
        </div>
      </div>

      {/* SECTION 4: Comparative Performance Analytics (Student vs Class Average) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Score vs Cohort Average Bar Visualization (8 cols) */}
        <div className="lg:col-span-8 bg-white dark:bg-[#1c1b1d]/80 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col justify-between transition-colors">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                  Relative Cohort Dispersion Analysis
                </h2>
                <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
                  Elena Vance (Gold) vs Honors Cohort Mean (Muted Slate)
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-gold"></span>
                  <span className="text-slate-800 dark:text-[#f8fafc]">Elena's Score</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-slate-300 dark:bg-[#39485a]"></span>
                  <span className="text-slate-500 dark:text-[#94a3b8]">Class Mean</span>
                </div>
              </div>
            </div>

            {/* Comparative Bar Chart */}
            <div className="space-y-4">
              {courseMarks.map((c) => (
                <div key={c.id}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800 dark:text-[#f8fafc]">{c.courseCode} {c.courseName}</span>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-[#b8860b] dark:text-gold-bright font-bold">{c.totalScore.toFixed(1)} / 100</span>
                      <span className="text-slate-400 dark:text-[#94a3b8]">vs Class {c.cohortMean.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 dark:bg-[#201f22] h-3.5 rounded-full overflow-hidden flex relative">
                    {/* Student Score bar */}
                    <div
                      className="bg-gold h-full rounded-full transition-all duration-700"
                      style={{ width: `${c.totalScore}%` }}
                    ></div>
                    {/* Class average pointer marker */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-slate-400 dark:bg-[#39485a] shadow-sm z-10"
                      style={{ left: `${c.cohortMean}%` }}
                      title={`Class Average: ${c.cohortMean}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delta Indicator Footnote */}
          <div className="mt-6 pt-3 bg-slate-50 dark:bg-[#201f22]/50 p-3 rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-between text-xs flex-wrap gap-2">
            <span className="text-slate-600 dark:text-[#94a3b8]">
              Cumulative Mean Variance: <strong className="text-emerald-600 dark:text-[#58e7aa] font-semibold">+15.8% above department median</strong>
            </span>
            <span className="text-[11px] text-[#b8860b] dark:text-gold-bright font-bold">Bell Curve Decile: D10</span>
          </div>
        </div>

        {/* Right: Faculty Academic Advisor Endorsement Card (4 cols) */}
        <div className="lg:col-span-4 bg-white dark:bg-[#1c1b1d]/80 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col justify-between relative overflow-hidden transition-colors">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gold/5 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-[11px] text-[#b8860b] dark:text-gold-bright uppercase font-bold tracking-wider">
                  Faculty Guidance Log
                </span>
              </div>
              <span className="text-[11px] text-slate-400 dark:text-[#94a3b8]">Oct 16, 2026</span>
            </div>

            <div className="pl-3 border-l-2 border-gold space-y-2 mb-4">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-[#f8fafc] italic leading-relaxed font-['Manrope']">
                "Elena has maintained extraordinary consistency across both laboratory assignments and theory lectures. Her attendance record is in the top 2% of the cohort, directly reinforcing her mastery in CS-482 quantum foundations."
              </p>
              <span className="text-[11px] text-slate-500 dark:text-[#94a3b8] block">
                — Dr. Alistair Finch, Senior Department Chair
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5">
                <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] uppercase block">Term Status</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-[#58e7aa]">Exemplary</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5">
                <span className="text-[10px] text-slate-500 dark:text-[#94a3b8] uppercase block">Eligible Honors</span>
                <span className="text-sm font-bold text-[#b8860b] dark:text-gold-bright">Summa Cum</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => showToast('Advisory Request Logged', 'Faculty advisor consultation request dispatched to Dr. Finch.')}
            className="mt-6 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs dark:text-[#f8fafc] hover:text-[#b8860b] dark:hover:text-gold font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Book Faculty Advisory Session</span>
          </button>
        </div>
      </div>
    </div>
  );
};