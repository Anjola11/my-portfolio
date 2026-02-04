import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './SystemDiagnostic.css'

const bootMessages = [
  'SYSTEM_BOOT...',
  'LOADING_MODULES...',
  '├─ Navigation: OK',
  '├─ Projects: OK',
  '├─ Contact: OK',
  '└─ Assets: OK',
  '',
  'INITIALIZATION_COMPLETE',
  'WELCOME_TO_THE_ENGINEERING_LEDGER'
]

export default function SystemDiagnostic() {
  const [visibleMessages, setVisibleMessages] = useState([])

  useEffect(() => {
    bootMessages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message])
      }, index * 300)
    })
  }, [])

  return (
    <div className="system-diagnostic">
      <div className="diagnostic-container">
        {visibleMessages.map((message, index) => (
          <motion.div
            key={index}
            className="boot-message"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {message}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
