import { motion } from 'framer-motion'
import './Identification.css'
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

export default function Identification() {
  return (
    <motion.div
      className="page-container identification-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="identification-content">
        <div className="name-stamp">
          <h1>AANU ALADENIYI</h1>
          <div className="stamp-subtitle">BACKEND</div>
          <div className="stamp-subtitle">DEVELOPER</div>
        </div>

        <div className="status-box">
          <div className="status-header">SYSTEM STATUS</div>
          <div className="status-divider"></div>
          
          <div className="status-row">
            <span className="status-key">ROLE:</span>
            <span className="status-value">BACKEND_ENGINEER</span>
          </div>
          <div className="status-row">
            <span className="status-key">STATUS:</span>
            <span className="status-value">ACTIVE_DEVELOPER</span>
          </div>
          <div className="status-row">
            <span className="status-key">AVAILABILITY:</span>
            <span className="status-value">OPEN_TO_COLLABORATION</span>
          </div>
          <div className="status-row">
            <span className="status-key">FOCUS:</span>
            <span className="status-value">SCALABLE_SYSTEMS & ARCHITECTURE</span>
          </div>
        </div>
      </div>

      <div className="page-indicator">PAGE 00 / 05</div>
      <PageNavigation />
    </motion.div>
  )
}
