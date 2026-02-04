import { useState } from 'react'
import { motion } from 'framer-motion'
import './ProjectCard.css'

export default function ProjectCard({ project, entryNumber }) {
  const [imageMode, setImageMode] = useState('sketch')
  const [showCredentials, setShowCredentials] = useState(false)

  const copyCredentials = () => {
    if (project.specs.demoCredentials) {
      const text = `Username: ${project.specs.demoCredentials.username}\nPassword: ${project.specs.demoCredentials.password}`
      navigator.clipboard.writeText(text)
      alert('Credentials copied to clipboard!')
    }
  }

  if (project.pending) {
    return (
      <motion.div 
        className="project-card pending-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-header">
          <span className="entry-number">ENTRY_0{entryNumber}</span>
          <span className="status-badge pending">PENDING ⧖</span>
        </div>

        <div className="project-content">
          <div className="project-thumbnail pending-thumbnail">
            <div className="grid-pattern"></div>
            <div className="pending-stamp">PENDING</div>
          </div>

          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-subtitle">{project.subtitle}</div>
            
            <div className="project-meta">
              <div className="meta-item">STATUS: {project.status}</div>
              <div className="meta-item">EXPECTED: {project.specs.expected}</div>
            </div>

            <p className="project-summary">{project.summary}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <span className="entry-number">ENTRY_0{entryNumber}</span>
        <span className="status-badge verified">VERIFIED ✓</span>
      </div>

      <div className="project-content">
        <motion.div 
          className={`project-thumbnail ${imageMode}`}
          onMouseEnter={() => setImageMode('color')}
          onMouseLeave={() => setImageMode('sketch')}
          whileHover={{ scale: 1.05 }}
        >
          <div className="thumbnail-placeholder">
            [PROJECT PREVIEW]
          </div>
          <div className="thumbnail-label">
            {imageMode === 'sketch' ? 'SCHEMATIC_VIEW' : 'DEVELOPED_IMAGE'}
          </div>
        </motion.div>

        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-subtitle">{project.subtitle}</div>
          
          <div className="project-meta">
            <div className="meta-item">CLASSIFICATION: {project.classification}</div>
            <div className="meta-item">COMPLEXITY: {project.complexity}</div>
            <div className="meta-item">STATUS: {project.status}</div>
          </div>

          <div className="technical-summary">
            <div className="section-label">TECHNICAL_SUMMARY:</div>
            <div className="summary-divider"></div>
            <p>{project.summary}</p>
          </div>

          <div className="specification-table">
            <div className="section-label">SPECIFICATION_TABLE:</div>
            <table>
              <tbody>
                {Object.entries(project.specs).map(([key, value]) => {
                  if (key === 'demoCredentials') return null
                  return (
                    <tr key={key}>
                      <td className="spec-key">{key.replace(/([A-Z])/g, '_$1').toUpperCase()}</td>
                      <td className="spec-value">
                        {typeof value === 'string' && value.startsWith('http') ? (
                          <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                        ) : (
                          value
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {project.specs.demoCredentials && (
            <div className="demo-credentials">
              <div className="credentials-header">DEMO_ACCESS:</div>
              <div className="credentials-content">
                <div>Username: {project.specs.demoCredentials.username}</div>
                <div>Password: {project.specs.demoCredentials.password}</div>
              </div>
              <button className="copy-button" onClick={copyCredentials}>
                COPY 📋
              </button>
            </div>
          )}

          <div className="project-actions">
            {project.specs.deployment && (
              <a href={project.specs.deployment} target="_blank" rel="noopener noreferrer" className="action-button">
                VIEW_DETAILS →
              </a>
            )}
            {project.specs.repository && (
              <a href={project.specs.repository} target="_blank" rel="noopener noreferrer" className="action-button">
                SOURCE_CODE ⧉
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
