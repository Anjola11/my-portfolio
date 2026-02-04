import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './DirectoryPanel.css'

const menuItems = [
  {
    section: '00_IDENTIFICATION',
    items: [
      { label: 'Personal Overview', path: '/' },
      { label: 'Current Status', path: '/' }
    ]
  },
  {
    section: '01_PROJECT_LOGS',
    items: [
      { label: 'Entry_01: DVota', path: '/projects' },
      { label: 'Entry_02: Kennyfasa', path: '/projects' },
      { label: 'Entry_03: [PENDING]', path: '/projects' }
    ]
  },
  {
    section: '02_INSTRUMENTATION',
    items: [
      { label: 'Core Technologies', path: '/instrumentation' },
      { label: 'Development Tools', path: '/instrumentation' },
      { label: 'Specializations', path: '/instrumentation' }
    ]
  },
  {
    section: '03_SIGNAL_PATH',
    items: [
      { label: 'Professional Networks', path: '/contact' },
      { label: 'Direct Contact', path: '/contact' }
    ]
  }
]

export default function DirectoryPanel({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="directory-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="directory-panel"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              mass: 1.2
            }}
          >
            <div className="directory-header">
              <h2>SYSTEM DIRECTORY</h2>
              <button className="close-x-button" onClick={onClose} aria-label="Close menu">
                ×
              </button>
            </div>
            
            <nav className="directory-nav">
              {menuItems.map((section, idx) => (
                <div key={idx} className="directory-section">
                  <div className="section-title">{section.section}</div>
                  {section.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      to={item.path}
                      className="directory-link"
                      onClick={onClose}
                    >
                      <span className="link-arrow">└─</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
