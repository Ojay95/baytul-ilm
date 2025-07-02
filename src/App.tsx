import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tutors from './pages/Tutors'
import TutorProfile from './pages/TutorProfile'
import Contact from './pages/Contact'
import BecomeTutor from './pages/BecomeTutor'
import BookSession from './pages/BookSession'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tutors" element={<Tutors />} />
      <Route path="/tutor/:id" element={<TutorProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/become-tutor" element={<BecomeTutor />} />
      <Route path="/book-session/:tutorId" element={<BookSession />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App