import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { RoleProvider } from './context/RoleContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import AuthPage from './pages/auth/AuthPage.jsx'
import TutorPage from './pages/tutor/TutorPage.jsx'
import StudentPage from './pages/student/StudentPage.jsx'
import ParentPage from './pages/parent/ParentPage.jsx'

export default function App() {
  return (
    <AuthProvider>
      <RoleProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<DashboardLayout />}>
              <Route path="/tutor" element={<TutorPage />} />
              <Route path="/student" element={<StudentPage />} />
              <Route path="/parent" element={<ParentPage />} />
            </Route>
          </Routes>
        </ToastProvider>
      </RoleProvider>
    </AuthProvider>
  )
}
