import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  MessageSquareQuote,
  CheckCircle2,
  Calendar,
  BookOpen,
  Bookmark,
  ExternalLink,
  Award,
  Sparkles,
  User,
  ThumbsUp,
  Lightbulb,
  Check,
} from 'lucide-react';

export const StudentFeedback: React.FC = () => {
  const {
    facultyFeedback,
    markFeedbackReviewed,
    openOfficeHoursModal,
    showToast,
  } = useApp();

  const handleBookmarkPaper = (title: string) => {
    showToast('Saved to Scholar Library', `"${title}" indexed in your personal research vault.`);
  };

  const handleLibraryProxy = () => {
    showToast('Library Proxy Connected', 'Institutional Shibboleth SSO token verified for IEEE, ACM and JSTOR databases.');
  };

  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in duration-300">
      {/* Mentorship Overview Bar */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-[#b8860b] dark:text-gold-bright shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#b8860b] dark:text-gold-bright">
              Academic Advisory Directive
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
              Direct Faculty Evaluations & Growth Pathways
            </h2>
            <span className="text-xs text-slate-500 dark:text-[#94a3b8]">
              Verified peer audits from Department Chairs and Principal Research Advisors
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 self-end md:self-center">
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-slate-900 dark:text-[#f8fafc]">Faculty Endorsement Index</span>
            <span className="text-[11px] text-emerald-600 dark:text-[#58e7aa] font-semibold">98th Percentile (Dean's Commendation)</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#2a2a2c] border border-slate-200 dark:border-gold/30 flex items-center justify-center text-[#b8860b] dark:text-gold-bright font-extrabold text-lg tabular-nums shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            9.8
          </div>
        </div>
      </div>

      {/* Main Feedback Split (8 cols reviews + 4 cols Advisor Suggestions & Reading list) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Faculty Reviews Feed (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {facultyFeedback.map((fb) => (
            <div
              key={fb.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-md flex flex-col gap-4 relative overflow-hidden transition-colors"
            >
              <div className="absolute top-0 left-0 h-full w-1.5 bg-gold"></div>

              <div className="flex flex-wrap items-start justify-between gap-3 pl-1">
                <div className="flex items-center gap-3">
                  <img
                    src={fb.facultyAvatar}
                    alt={fb.facultyName}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/40 shadow-sm"
                  />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                        {fb.facultyName}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#58e7aa]" />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-[#94a3b8]">{fb.facultyTitle}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-[#b8860b] dark:text-gold-bright text-[10px] font-bold">
                    {fb.assessmentType}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">{fb.timestamp}</span>
                </div>
              </div>

              {/* Faculty Quote Block */}
              <div className="pl-4 py-1 border-l-2 border-gold/60 italic text-sm text-slate-800 dark:text-[#f8fafc] leading-relaxed font-['Manrope']">
                "{fb.quote}"
              </div>

              {/* Identified Strengths & Tactical Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 pl-1">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 border border-slate-200 dark:border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-[#58e7aa] flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5" /> Identified Strengths
                  </span>
                  <p className="text-xs text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    {fb.identifiedStrengths}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/70 border border-slate-200 dark:border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-[#b8860b] dark:text-gold-bright flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5" /> Suggestion for Growth
                  </span>
                  <p className="text-xs text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    {fb.growthSuggestions}
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 pl-1 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#94a3b8]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#58e7aa]"></span>
                  <span>Audited for Honors Transcript</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={fb.reviewed}
                    onClick={() => markFeedbackReviewed(fb.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      fb.reviewed
                        ? 'bg-slate-100 text-emerald-700 dark:bg-[#201f22] dark:text-[#58e7aa] cursor-default'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] dark:text-[#f8fafc]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{fb.reviewed ? 'Reviewed & Archived' : 'Mark as Reviewed'}</span>
                  </button>

                  <button
                    onClick={() => openOfficeHoursModal(fb.facultyName)}
                    className="px-3.5 py-1.5 rounded-lg bg-gold text-obsidian text-xs font-bold hover:bg-gold-hover transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Request 1-on-1 Office Hours</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Advisor Recommendations & Curated Reading Vault (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Advisor Strategic Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col gap-4 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#b8860b] dark:text-gold-bright">
                Faculty Mentorship
              </span>
              <Award className="w-4 h-4 text-[#b8860b] dark:text-gold" />
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyWU950d6vPepPZGgP5CcepWI6glF80r6G71_S1w7vZwLCRkCHVYZk0IV0SzUiOULNWNfn2dtoS549Ty39YWJ2iwLVUFdWc1hTHJZ6FosGVEH0FVkNYQgzn-YN-dqEUr3CpDya80jOx0XgXRWOXgdjAG-asDOSg1VC2TzWbvxj7HouMJi8TSHT4tlSw8xNnBQRXwNp7hRFKnl05woUbhuz-2MQ2TVwQpPEtKTUJ9R9APbB0YKENGqV"
                alt="Dr. Evelyn Sterling"
                className="w-12 h-12 rounded-full object-cover ring-1 ring-gold/40 shadow-sm"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs text-slate-900 dark:text-[#f8fafc]">Dr. Evelyn Sterling</span>
                <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]">Senior Academic Advisor • Dean's Council</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22]/80 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-[#94a3b8] leading-relaxed">
              <strong className="text-slate-900 dark:text-[#f8fafc]">Strategic Roadmapping:</strong> "Elena, your trajectory this term points decisively toward Oxford Symposium Fellowship candidacy. Keep your elective selections weighted toward advanced tensor analysis."
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94a3b8]">
                Upcoming Academic Milestones
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-[#f8fafc]">
                <CheckCircle2 className="w-4 h-4 text-[#b8860b] dark:text-gold" />
                <span>Fellowship Application Due: Dec 12</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-[#f8fafc]">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa]" />
                <span>Spring Research Proposal Pitch: Nov 15</span>
              </div>
            </div>
          </div>

          {/* Curated Reading List */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1c1b1d]/85 border border-slate-200 dark:border-white/5 shadow-sm flex flex-col gap-4 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-[#f8fafc] font-['Plus_Jakarta_Sans']">
                Curated Reading List
              </h3>
              <span className="text-[10px] text-[#b8860b] dark:text-gold-bright font-semibold">Faculty Assigned</span>
            </div>

            <p className="text-xs text-slate-500 dark:text-[#94a3b8] leading-relaxed">
              Targeted papers handpicked by department chairs to deepen your upcoming capstone formulation.
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 hover:border-gold/40 transition-all flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#b8860b] dark:text-gold mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                      The Ricci Flow: Techniques & Applications
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">Chow, Lu & Ni • AMS Monographs</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookmarkPaper('The Ricci Flow: Techniques & Applications')}
                  className="text-slate-400 dark:text-[#94a3b8] hover:text-[#b8860b] dark:hover:text-gold transition-colors"
                  title="Save to Vault"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 hover:border-gold/40 transition-all flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-slate-500 dark:text-[#b9c8de] mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                      Paxos Made Live: An Engineering Deployment
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">Chandra, Griesemer & Redstone</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookmarkPaper('Paxos Made Live')}
                  className="text-slate-400 dark:text-[#94a3b8] hover:text-[#b8860b] dark:hover:text-gold transition-colors"
                  title="Save to Vault"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#201f22] border border-slate-200 dark:border-white/5 hover:border-gold/40 transition-all flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-emerald-600 dark:text-[#58e7aa] mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-slate-900 dark:text-[#f8fafc]">
                      Continuous Time Dynamic Economics
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-[#94a3b8]">Turnovsky • MIT Press</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookmarkPaper('Continuous Time Dynamic Economics')}
                  className="text-slate-400 dark:text-[#94a3b8] hover:text-[#b8860b] dark:hover:text-gold transition-colors"
                  title="Save to Vault"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleLibraryProxy}
              className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-[#2a2a2c] dark:hover:bg-[#353437] text-xs dark:text-[#f8fafc] hover:text-[#b8860b] dark:hover:text-gold font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <span>Access University Library Proxy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};