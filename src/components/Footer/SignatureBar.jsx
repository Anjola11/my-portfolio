import { useState, useEffect } from 'react'
import './SignatureBar.css'

export default function SignatureBar() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date()
      const formatted = now.toISOString().slice(0, 16).replace('T', ' ')
      setTimestamp(formatted)
    }

    updateTimestamp()
    const interval = setInterval(updateTimestamp, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const contacts = [
    { label: 'SIGNAL_01: GitHub', url: 'https://github.com' },
    { label: 'SIGNAL_02: LinkedIn', url: 'https://linkedin.com' },
    { label: 'SIGNAL_03: Email', url: 'mailto:your.email@example.com' }
  ]

  return (
    <footer className="signature-bar">
      <div className="signature-links">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="signature-link"
          >
            {contact.label}
          </a>
        ))}
      </div>
      <div className="signature-timestamp">
        TIMESTAMP: {timestamp}
      </div>
    </footer>
  )
}
