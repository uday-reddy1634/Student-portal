export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export type StudentStanding = 'Summa Cum Laude' | 'Magna Cum Laude' | 'Cum Laude' | 'Dean\'s List Scholar' | 'Good Standing';

export interface StudentProfile {
  id: string;
  name: string;
  candidateId: string;
  avatar: string;
  program: string;
  faculty: string;
  term: string;
  gpa: number;
  maxGpa: number;
  cohortRank: number;
  cohortTotal: number;
  creditLoad: number;
  percentile: string;
  attendanceRate: number;
  academicAverage: number;
  standing: StudentStanding;
  parentName: string;
  parentEmail: string;
}

export interface ScheduleItem {
  id: string;
  timeStart: string;
  timeEnd: string;
  period: string; // "AM" | "PM"
  courseCode: string;
  courseName: string;
  instructor: string;
  location: string;
  status: 'ongoing' | 'upcoming' | 'scheduled' | 'completed';
  statusLabel?: string;
  streamUrl?: string;
}

export interface CourseMark {
  id: string;
  courseCode: string;
  courseName: string;
  instructor: string;
  scheduleTime: string;
  credits: number;
  category: 'core' | 'electives';
  midtermScore: number;
  midtermMax: number;
  internalsScore: number;
  internalsMax: number;
  finalScore: number;
  finalMax: number;
  totalScore: number;
  grade: string;
  percentile: string;
  cohortMean: number;
  status: string;
}

export interface AttendanceDay {
  day: number;
  dateStr: string;
  status: 'present' | 'late' | 'absent' | 'excused' | 'weekend' | 'empty';
  sessionsCount?: number;
  attendedCount?: number;
  details?: string;
  course?: string;
}

export interface CourseAttendance {
  courseCode: string;
  courseName: string;
  attended: number;
  total: number;
  rate: number;
  status: 'Exemplary' | 'Safe' | 'Good' | 'Warning';
}

export interface AssignmentItem {
  id: string;
  courseCode: string;
  courseName: string;
  title: string;
  description: string;
  dueText: string;
  dueTimeFormatted: string;
  deadlineHoursRemaining: number;
  completionPercentage: number;
  rubricSummary: string;
  instructor: string;
  status: 'pending' | 'submitted' | 'graded';
  submittedFileName?: string;
  submittedDate?: string;
  score?: number;
  maxScore?: number;
  facultyComment?: string;
}

export interface SyllabusItem {
  id: string;
  title: string;
  subtitle: string;
  courseCode: string;
  instructor: string;
  dateUploaded: string;
  format: 'PDF' | 'SLIDES' | 'EPUB';
  fileSize: string;
  downloadUrl: string;
}

export interface FacultyFeedbackItem {
  id: string;
  facultyName: string;
  facultyTitle: string;
  facultyAvatar: string;
  courseCode: string;
  assessmentType: string;
  timestamp: string;
  quote: string;
  identifiedStrengths: string;
  growthSuggestions: string;
  reviewed: boolean;
  honorsTag?: string;
}

export interface CohortStudent {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  gpa: number;
  attendanceRate: number;
  department: string;
  standing: string;
  badge?: 'gold' | 'silver' | 'bronze' | 'merit';
}
