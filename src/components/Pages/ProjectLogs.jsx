import { motion } from 'framer-motion'
import ProjectCard from '../ProjectEntry/ProjectCard'
import './ProjectLogs.css'

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

const projects = [
  {
    id: 1,
    title: 'DVota v2.0',
    subtitle: 'ONLINE VOTING SYSTEM',
    classification: 'Backend Logic',
    complexity: 'High',
    status: 'Production',
    verified: true,
    summary: 'Secure, decentralized voting architecture implementing cryptographic vote validation, real-time result aggregation, and role-based access control for electoral management.',
    specs: {
      repository: 'https://github.com/yourusername/dvota',
      deployment: 'https://dvota-demo.com',
      accessLevel: 'PUBLIC',
      demoCredentials: { username: 'admin', password: 'demo123' },
      techStack: 'Python, FastAPI, SQL',
      completionDate: '2024-Q4'
    }
  },
  {
    id: 2,
    title: 'Kennyfasa Bookkeeper',
    subtitle: 'BUSINESS MANAGEMENT SYSTEM',
    classification: 'Full Stack',
    complexity: 'High',
    status: 'Production',
    verified: true,
    summary: 'Comprehensive business management platform featuring inventory tracking, transaction processing, customer relationship management, and real time analytics for print shop operations.',
    specs: {
      repository: 'https://github.com/yourusername/kennyfasa',
      deployment: 'https://kennyfasa-demo.com',
      accessLevel: 'PUBLIC',
      adminFeatures: 'Inventory, Orders, Analytics',
      businessLogic: 'Transaction processing, Stock management',
      techStack: 'Python, FastAPI, React, PostgreSQL',
      completionDate: '2025-Q1',
      videoDemo: 'https://youtube.com/watch?v=demo'
    }
  },
  {
    id: 3,
    title: 'TBD',
    subtitle: 'PROJECT PLACEHOLDER',
    classification: 'Pending',
    complexity: 'Unknown',
    status: 'IN_DEVELOPMENT',
    verified: false,
    pending: true,
    summary: 'This slot is intentionally reserved for upcoming projects currently under development. Check back soon for updates.',
    specs: {
      expected: 'Q2_2026'
    }
  }
]

export default function ProjectLogs() {
  return (
    <motion.div
      className="page-container project-logs-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="page-header">
        <h2 className="page-title">PROJECT LOGS</h2>
        <div className="page-subtitle">DOCUMENTED SYSTEMS & IMPLEMENTATIONS</div>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} entryNumber={index + 1} />
        ))}
      </div>

      <div className="page-indicator">PAGE 01 / 03</div>
    </motion.div>
  )
}
