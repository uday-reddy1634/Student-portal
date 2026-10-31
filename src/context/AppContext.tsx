import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserRole,
  StudentProfile,
  ScheduleItem,
  CourseMark,
  CourseAttendance,
  AssignmentItem,
  SyllabusItem,
  FacultyFeedbackItem,
  CohortStudent,
  AttendanceDay,
} from '../types';
import {
  initialStudent,
  initialSchedule,
  initialCourseMarks,
  initialCourseAttendance,
  septemberCalendarDays,
  octoberCalendarDays,
  initialAssignments,
  initialSyllabusList,
  initialFacultyFeedback,
  initialCohortLeaderboard,
  initialTeacherRoster,
  TeacherStudentRosterItem,
} from '../data/mockData';

export type StudentTab = 'overview' | 'attendance' | 'marks' | 'rankings' | 'work' | 'feedback';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  studentTab: StudentTab;
  setStudentTab: (tab: StudentTab) => void;
  workSubTab: 'work' | 'feedback';
  setWorkSubTab: (tab: 'work' | 'feedback') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  
  // Data states
  student: StudentProfile;
  schedule: ScheduleItem[];
  courseMarks: CourseMark[];
  courseAttendance: CourseAttendance[];
  septemberDays: AttendanceDay[];
  octoberDays: AttendanceDay[];
  assignments: AssignmentItem[];
  syllabusList: SyllabusItem[];
  facultyFeedback: FacultyFeedbackItem[];
  cohortLeaderboard: CohortStudent[];
  teacherRoster: TeacherStudentRosterItem[];

  // Action methods
  submitAssignment: (asgId: string, fileName: string) => void;
  markFeedbackReviewed: (fbId: string) => void;
  requestOfficeHours: (instructor: string, preferredTime: string, notes: string) => void;
  updateTeacherAttendance: (rollNo: string, status: 'Present' | 'Late' | 'Absent' | 'Excused') => void;
  markAllTeacherPresent: () => void;
  saveTeacherAttendance: () => void;
  postTeacherFeedback: (studentName: string, courseCode: string, quote: string, strengths: string, suggestions: string, category: string) => void;
  addTeacherAssignment: (asg: Partial<AssignmentItem>) => void;
  addTeacherSyllabus: (syl: Partial<SyllabusItem>) => void;
  adminCreateStudent: (newStudent: { name: string; candidateId: string; program: string; gpa: number }) => void;
  adminDeleteStudent: (rollNo: string) => void;
  adminUpdateMarks: (rollNo: string, courseCode: string, newScore: number) => void;
  adminApproveExcuse: (dayDateStr: string) => void;

  // Modals & UI helpers
  toasts: Toast[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  isOfficeHoursModalOpen: boolean;
  officeHoursInstructor: string;
  openOfficeHoursModal: (instructor: string) => void;
  closeOfficeHoursModal: () => void;
  isSubmitModalOpen: boolean;
  selectedAssignmentForSubmit: AssignmentItem | null;
  openSubmitModal: (asg: AssignmentItem) => void;
  closeSubmitModal: () => void;
  selectedDayDetail: AttendanceDay | null;
  openDayDetail: (day: AttendanceDay) => void;
  closeDayDetail: () => void;
  isExportLedgerOpen: boolean;
  openExportLedger: () => void;
  closeExportLedger: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('student');
  const [studentTab, setStudentTab] = useState<StudentTab>('overview');
  const [workSubTab, setWorkSubTab] = useState<'work' | 'feedback'>('work');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Data states
  const [student, setStudent] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('aura_student');
    return saved ? JSON.parse(saved) : initialStudent;
  });

  const [schedule] = useState<ScheduleItem[]>(initialSchedule);
  const [courseMarks, setCourseMarks] = useState<CourseMark[]>(() => {
    const saved = localStorage.getItem('aura_marks');
    return saved ? JSON.parse(saved) : initialCourseMarks;
  });

  const [courseAttendance, setCourseAttendance] = useState<CourseAttendance[]>(() => {
    const saved = localStorage.getItem('aura_attendance_courses');
    return saved ? JSON.parse(saved) : initialCourseAttendance;
  });

  const [septemberDays, setSeptemberDays] = useState<AttendanceDay[]>(septemberCalendarDays);
  const [octoberDays, setOctoberDays] = useState<AttendanceDay[]>(octoberCalendarDays);

  const [assignments, setAssignments] = useState<AssignmentItem[]>(() => {
    const saved = localStorage.getItem('aura_assignments');
    return saved ? JSON.parse(saved) : initialAssignments;
  });

  const [syllabusList, setSyllabusList] = useState<SyllabusItem[]>(() => {
    const saved = localStorage.getItem('aura_syllabus');
    return saved ? JSON.parse(saved) : initialSyllabusList;
  });

  const [facultyFeedback, setFacultyFeedback] = useState<FacultyFeedbackItem[]>(() => {
    const saved = localStorage.getItem('aura_feedback');
    return saved ? JSON.parse(saved) : initialFacultyFeedback;
  });

  const [cohortLeaderboard, setCohortLeaderboard] = useState<CohortStudent[]>(initialCohortLeaderboard);

  const [teacherRoster, setTeacherRoster] = useState<TeacherStudentRosterItem[]>(() => {
    const saved = localStorage.getItem('aura_teacher_roster');
    return saved ? JSON.parse(saved) : initialTeacherRoster;
  });

  // Modal states
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isOfficeHoursModalOpen, setIsOfficeHoursModalOpen] = useState(false);
  const [officeHoursInstructor, setOfficeHoursInstructor] = useState('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedAssignmentForSubmit, setSelectedAssignmentForSubmit] = useState<AssignmentItem | null>(null);
  const [selectedDayDetail, setSelectedDayDetail] = useState<AttendanceDay | null>(null);
  const [isExportLedgerOpen, setIsExportLedgerOpen] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-[#09090b]', 'text-[#f8fafc]');
      document.body.classList.remove('bg-[#f8fafc]', 'text-[#0f172a]');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#09090b]', 'text-[#f8fafc]');
      document.body.classList.add('bg-[#f8fafc]', 'text-[#0f172a]');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('aura_theme', next);
      return next;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Student Actions
  const submitAssignment = (asgId: string, fileName: string) => {
    setAssignments(prev =>
      prev.map(asg => {
        if (asg.id === asgId) {
          return {
            ...asg,
            status: 'submitted',
            dueText: 'Submitted on Time',
            deadlineHoursRemaining: 0,
            completionPercentage: 100,
            submittedFileName: fileName,
            submittedDate: 'Just now • Verified',
          };
        }
        return asg;
      })
    );
    showToast('Deliverable Transmitted', `${fileName} staged to faculty review channel with SHA-256 verification.`);
    setIsSubmitModalOpen(false);
  };

  const markFeedbackReviewed = (fbId: string) => {
    setFacultyFeedback(prev =>
      prev.map(fb => (fb.id === fbId ? { ...fb, reviewed: true } : fb))
    );
    showToast('Audit Log Updated', 'Comment archived to your academic honors dossier.');
  };

  const requestOfficeHours = (instructor: string, preferredTime: string, notes: string) => {
    setIsOfficeHoursModalOpen(false);
    showToast(
      'Consultation Scheduled',
      `1-on-1 office hours request with ${instructor} logged for ${preferredTime || 'Tomorrow 15:00'}. Confirmation sent to institutional email.`
    );
  };

  const openOfficeHoursModal = (instructor: string) => {
    setOfficeHoursInstructor(instructor);
    setIsOfficeHoursModalOpen(true);
  };

  const closeOfficeHoursModal = () => {
    setIsOfficeHoursModalOpen(false);
  };

  const openSubmitModal = (asg: AssignmentItem) => {
    setSelectedAssignmentForSubmit(asg);
    setIsSubmitModalOpen(true);
  };

  const closeSubmitModal = () => {
    setIsSubmitModalOpen(false);
    setSelectedAssignmentForSubmit(null);
  };

  const openDayDetail = (day: AttendanceDay) => {
    setSelectedDayDetail(day);
  };

  const closeDayDetail = () => {
    setSelectedDayDetail(null);
  };

  const openExportLedger = () => setIsExportLedgerOpen(true);
  const closeExportLedger = () => setIsExportLedgerOpen(false);

  // Teacher Actions
  const updateTeacherAttendance = (rollNo: string, status: 'Present' | 'Late' | 'Absent' | 'Excused') => {
    setTeacherRoster(prev =>
      prev.map(item => (item.rollNo === rollNo ? { ...item, attendanceStatus: status } : item))
    );
  };

  const markAllTeacherPresent = () => {
    setTeacherRoster(prev => prev.map(item => ({ ...item, attendanceStatus: 'Present' })));
    showToast('Batch Status Set', 'All 8 cohort scholars marked Present for today.');
  };

  const saveTeacherAttendance = () => {
    localStorage.setItem('aura_teacher_roster', JSON.stringify(teacherRoster));
    showToast('Attendance Ledger Saved', 'Session biometric record synced to University Registrar.');
  };

  const postTeacherFeedback = (
    studentName: string,
    courseCode: string,
    quote: string,
    strengths: string,
    suggestions: string,
    category: string
  ) => {
    const newFb: FacultyFeedbackItem = {
      id: `fb-${Date.now()}`,
      facultyName: 'Dr. Aris Thorne',
      facultyTitle: 'Director of Distributed Systems Lab • CS-482',
      facultyAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbwkTXHU2HCmX8amh2lQFBKsEcXKKyd6GxGOB6XVacnRWX2ydibszJLB5_ew8TMBS43kobAz_1FnX8LaOOmxpOzdQ0e72FuS-1Hz4Ed_H44vrqz0HDTLR-3hkBuBSX1dUTOf9o0ZH5DmGvZDb6tV92l32ncssDf8_abh8rpr1FZwP3HucMlhg3IJy4MfsAPZDt9bCOMGfxHPEdl7NJ4BUOwe5UMPKOJBk2NCAryav_nTU2nSk6T-51',
      courseCode,
      assessmentType: category || 'Faculty Term Evaluation',
      timestamp: 'Just now',
      quote,
      identifiedStrengths: strengths || 'Exemplary dedication and theoretical grounding.',
      growthSuggestions: suggestions || 'Continue peer review and seminar presentations.',
      reviewed: false,
      honorsTag: 'Distinguished Review',
    };
    setFacultyFeedback(prev => [newFb, ...prev]);
    showToast('Faculty Feedback Published', `Evaluation for ${studentName} dispatched to student and parent dashboards.`);
  };

  const addTeacherAssignment = (asgData: Partial<AssignmentItem>) => {
    const newAsg: AssignmentItem = {
      id: `asg-${Date.now()}`,
      courseCode: asgData.courseCode || 'CS-482',
      courseName: asgData.courseName || 'Quantum Algorithmic Complexity',
      title: asgData.title || 'New Computational Problem Set',
      description: asgData.description || 'Derive and simulate benchmark algorithm parameters.',
      dueText: asgData.dueText || 'Due in 7 Days',
      dueTimeFormatted: asgData.dueTimeFormatted || 'Nov 07, 23:59 EST',
      deadlineHoursRemaining: asgData.deadlineHoursRemaining || 168,
      completionPercentage: 0,
      rubricSummary: asgData.rubricSummary || '100 Pts (50% Derivations, 50% Benchmark Output)',
      instructor: 'Dr. Aris Thorne',
      status: 'pending',
    };
    setAssignments(prev => [newAsg, ...prev]);
    showToast('Assignment Released', `${newAsg.title} published to student portal.`);
  };

  const addTeacherSyllabus = (sylData: Partial<SyllabusItem>) => {
    const newSyl: SyllabusItem = {
      id: `syl-${Date.now()}`,
      title: sylData.title || 'New Lecture Master Slide Deck',
      subtitle: sylData.subtitle || 'Official Faculty Annotated Reference Package',
      courseCode: sylData.courseCode || 'CS-482',
      instructor: 'Dr. Aris Thorne',
      dateUploaded: 'Today',
      format: (sylData.format as any) || 'PDF',
      fileSize: sylData.fileSize || '14.2 MB',
      downloadUrl: '#',
    };
    setSyllabusList(prev => [newSyl, ...prev]);
    showToast('Course Material Published', `${newSyl.title} uploaded to Syllabus Repository.`);
  };

  // Admin Actions
  const adminCreateStudent = (newS: { name: string; candidateId: string; program: string; gpa: number }) => {
    const newRoster: TeacherStudentRosterItem = {
      rollNo: newS.candidateId,
      name: newS.name,
      classCode: 'CS-482',
      className: 'Quantum Algorithms',
      attendanceStatus: 'Present',
      currentMarks: Math.round(newS.gpa * 24),
      grade: newS.gpa >= 3.8 ? 'A+' : newS.gpa >= 3.5 ? 'A' : 'B+',
    };
    setTeacherRoster(prev => [...prev, newRoster]);
    showToast('Scholar Enrolled', `${newS.name} (${newS.candidateId}) added to registry database.`);
  };

  const adminDeleteStudent = (rollNo: string) => {
    setTeacherRoster(prev => prev.filter(r => r.rollNo !== rollNo));
    showToast('Record Removed', `Candidate ID ${rollNo} de-registered from current term.`);
  };

  const adminUpdateMarks = (rollNo: string, courseCode: string, newScore: number) => {
    setTeacherRoster(prev =>
      prev.map(r => (r.rollNo === rollNo ? { ...r, currentMarks: newScore } : r))
    );
    if (rollNo === '84920') {
      setCourseMarks(prev =>
        prev.map(m => (m.courseCode === courseCode ? { ...m, totalScore: newScore } : m))
      );
    }
    showToast('Grade Audit Recorded', `Score updated to ${newScore}/100. Bell-curve standing recalculated.`);
  };

  const adminApproveExcuse = (dayDateStr: string) => {
    setSeptemberDays(prev =>
      prev.map(d => (d.dateStr === dayDateStr ? { ...d, status: 'excused', details: 'Dean Medical Approval #MED-APPROVED' } : d))
    );
    showToast('Medical Excuse Approved', `Statutory attendance dispensation granted for ${dayDateStr}.`);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        studentTab,
        setStudentTab,
        workSubTab,
        setWorkSubTab,
        theme,
        toggleTheme,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        toggleMobileMenu,
        searchQuery,
        setSearchQuery,
        student,
        schedule,
        courseMarks,
        courseAttendance,
        septemberDays,
        octoberDays,
        assignments,
        syllabusList,
        facultyFeedback,
        cohortLeaderboard,
        teacherRoster,
        submitAssignment,
        markFeedbackReviewed,
        requestOfficeHours,
        updateTeacherAttendance,
        markAllTeacherPresent,
        saveTeacherAttendance,
        postTeacherFeedback,
        addTeacherAssignment,
        addTeacherSyllabus,
        adminCreateStudent,
        adminDeleteStudent,
        adminUpdateMarks,
        adminApproveExcuse,
        toasts,
        showToast,
        removeToast,
        isOfficeHoursModalOpen,
        officeHoursInstructor,
        openOfficeHoursModal,
        closeOfficeHoursModal,
        isSubmitModalOpen,
        selectedAssignmentForSubmit,
        openSubmitModal,
        closeSubmitModal,
        selectedDayDetail,
        openDayDetail,
        closeDayDetail,
        isExportLedgerOpen,
        openExportLedger,
        closeExportLedger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
