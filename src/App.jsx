import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navigation/Navbar'
import DirectoryPanel from './components/Navigation/DirectoryPanel'
import SystemDiagnostic from './components/Loading/SystemDiagnostic'
import Identification from './components/Pages/Identification'
import ProjectLogs from './components/Pages/ProjectLogs'
import Instrumentation from './components/Pages/Instrumentation'
import SignalPath from './components/Pages/SignalPath'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Identification />} />
        <Route path="/projects" element={<ProjectLogs />} />
        <Route path="/instrumentation" element={<Instrumentation />} />
        <Route path="/contact" element={<SignalPath />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SystemDiagnostic />
  }

  return (
    <Router>
      <div className="app">
        <Navbar onMenuClick={() => setMenuOpen(!menuOpen)} isSidebarOpen={menuOpen} />
        <DirectoryPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App

