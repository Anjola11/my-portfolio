import { motion } from 'framer-motion'
import './Education.css'
import PageNavigation from '../Navigation/PageNavigation'

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 80, damping: 20 },
      opacity: { duration: 0.3 }
    }
  },
  exit: { 
    x: '-100%', 
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 80, damping: 20 },
      opacity: { duration: 0.3 }
    }
  }
}

export default function Education() {
  return (
    <motion.div
      className="page-container education-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="page-header">
        <h2 className="page-title">ACADEMIC CREDENTIALS</h2>
        <div className="page-subtitle">EDUCATIONAL BACKGROUND</div>
      </div>

      <div className="education-content">
        <div className="education-card">
          <div className="education-header">
            <div className="degree-badge">BSc</div>
            <div className="degree-info">
              <h3 className="degree-title">Computer Engineering</h3>
              <div className="institution">Obafemi Awolowo University</div>
            </div>
          </div>

          <div className="education-divider"></div>

          <div className="education-details">
            <div className="detail-row">
              <span className="detail-key">LOCATION:</span>
              <span className="detail-value">Ile-Ife, Osun State, Nigeria</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">PERIOD:</span>
              <span className="detail-value">2023 - 2028</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">STATUS:</span>
              <span className="detail-value status-progress">[IN PROGRESS]</span>
            </div>
            <div className="detail-row">
              <span className="detail-key">FOCUS AREAS:</span>
              <span className="detail-value">Software Engineering, Systems Architecture, Backend Development</span>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-label">ACADEMIC PROGRESSION</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
            <div className="progress-text">Year 2 of 5 (40% Complete)</div>
          </div>
        </div>
      </div>

      <div className="page-indicator">PAGE 04 / 05</div>
      <PageNavigation />
    </motion.div>
  )
}
