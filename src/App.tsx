import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { MainLayout } from "./layouts/MainLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
// import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Documents from "./pages/Documents";
import DocumentAnalysis from "./pages/Documents/[id]";
import LessonPlans from "./pages/LessonPlans";
import Activities from "./pages/Activities";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        {/* <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} /> */}
        
        {/* Dashboard Routes */}
        <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/classes" element={<DashboardLayout><Classes /></DashboardLayout>} />
        <Route path="/documents" element={<DashboardLayout><Documents /></DashboardLayout>} />
        <Route path="/documents/:id" element={<DashboardLayout><DocumentAnalysis /></DashboardLayout>} />
        <Route path="/lesson-plans" element={<DashboardLayout><LessonPlans /></DashboardLayout>} />
        <Route path="/activities" element={<DashboardLayout><Activities /></DashboardLayout>} />
        <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
        <Route path="/support" element={<DashboardLayout><Support /></DashboardLayout>} />
        
        {/* Catch all - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
