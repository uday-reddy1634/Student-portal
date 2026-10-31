/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { StudentOverview } from './components/student/StudentOverview';
import { StudentAttendance } from './components/student/StudentAttendance';
import { StudentMarks } from './components/student/StudentMarks';
import { StudentRankings } from './components/student/StudentRankings';
import { StudentWorkVault } from './components/student/StudentWorkVault';
import { StudentFeedback } from './components/student/StudentFeedback';
import { OfficeHoursModal } from './components/modals/OfficeHoursModal';
import { SubmitDeliverableModal } from './components/modals/SubmitDeliverableModal';
import { DayDetailModal } from './components/modals/DayDetailModal';
import { ExportLedgerModal } from './components/modals/ExportLedgerModal';
import { ToastContainer } from './components/modals/ToastContainer';

const MainLayout: React.FC = () => {
  const { studentTab } = useApp();

  const renderContent = () => {
    switch (studentTab) {
      case 'overview':
        return <StudentOverview />;
      case 'attendance':
        return <StudentAttendance />;
      case 'marks':
        return <StudentMarks />;
      case 'rankings':
        return <StudentRankings />;
      case 'work':
        return <StudentWorkVault />;
      case 'feedback':
        return <StudentFeedback />;
      default:
        return <StudentOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-obsidian text-slate-900 dark:text-[#f8fafc] font-['Manrope'] selection:bg-gold/30 selection:text-slate-900 dark:selection:text-[#f8fafc] transition-colors duration-200">
      <Sidebar />
      <div className="pl-0 lg:pl-72 flex flex-col min-h-screen transition-all duration-300">
        <Header />
        <main className="pt-20 px-3 sm:px-6 lg:px-8 pb-24 lg:pb-16 flex-1 max-w-380 w-full mx-auto">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Ergonomic Bottom Navigation Dock */}
      <MobileBottomNav />

      {/* Global Student Action Modals */}
      <OfficeHoursModal />
      <SubmitDeliverableModal />
      <DayDetailModal />
      <ExportLedgerModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
