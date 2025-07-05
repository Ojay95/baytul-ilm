import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import Tutors from './pages/Tutors'
import TutorProfile from './pages/TutorProfile'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Unauthorized from './pages/Unauthorized'

// Student Pages
import Dashboard from './pages/Dashboard'
import StudentProfile from './pages/StudentProfile'
import BookSession from './pages/BookSession'
import Chat from './pages/Chat'

// Tutor Pages
import BecomeTutor from './pages/BecomeTutor'
import TutorDashboard from './pages/TutorDashboard'
import TutorEarnings from './pages/TutorEarnings'

// Admin Pages
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Student Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute requiredRoles={['student']}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/student-profile" element={
          <ProtectedRoute requiredRoles={['student']}>
            <StudentProfile />
          </ProtectedRoute>
        } />
        <Route path="/book-session/:tutorId" element={
          <ProtectedRoute requiredRoles={['student']}>
            <BookSession />
          </ProtectedRoute>
        } />
        <Route path="/chat/:tutorId" element={
          <ProtectedRoute requiredRoles={['student', 'tutor']}>
            <Chat />
          </ProtectedRoute>
        } />

        {/* Tutor Protected Routes */}
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/tutor-dashboard" element={
          <ProtectedRoute requiredRoles={['tutor']}>
            <TutorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/tutor-earnings" element={
          <ProtectedRoute requiredRoles={['tutor']}>
            <TutorEarnings />
          </ProtectedRoute>
        } />

        {/* Admin Protected Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute requiredRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  )
}

export default App