import { motion } from 'framer-motion'
import './Instrumentation.css'

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

const techCategories = [
  {
    title: 'PRIMARY_STACK',
    items: [
      { name: 'Python', proficiency: 85 },
      { name: 'FastAPI', proficiency: 75 },
      { name: 'SQLModel', proficiency: 70 },
      { name: 'PostgreSQL', proficiency: 75 },
      { name: 'Redis', proficiency: 60 }
    ]
  },
  {
    title: 'SYSTEMS_ENGINEERING',
    items: [
      { name: 'Assembly (x86)', proficiency: null },
      { name: 'Microelectronics', proficiency: null },
      { name: 'Semiconductor Physics', proficiency: null },
      { name: 'Embedded Systems', proficiency: null }
    ]
  },
  {
    title: 'PRODUCTION_TOOLS',
    items: [
      { name: 'Git / GitHub', proficiency: null },
      { name: 'Docker / Containerization', proficiency: null },
      { name: 'CI/CD Pipelines', proficiency: null },
      { name: 'Adobe Premiere Pro', proficiency: null },
      { name: 'Project Management (Agile)', proficiency: null }
    ]
  }
]

function ProficiencyBar({ proficiency }) {
  const filledBlocks = Math.floor(proficiency / 10)
  const emptyBlocks = 10 - filledBlocks
  
  return (
    <div className="proficiency-bar">
      <div className="bar-container">
        <div className="bar-fill" style={{ width: `${proficiency}%` }}></div>
      </div>
      <span className="bar-text">[{('█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks))}] {proficiency}%</span>
    </div>
  )
}

export default function Instrumentation() {
  return (
    <motion.div
      className="page-container instrumentation-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="page-header">
        <h2 className="page-title">INSTRUMENTATION & TOOLING</h2>
        <div className="page-subtitle">ENGINEERING APPARATUS</div>
      </div>

      <div className="calibration-label">CALIBRATION_TABLE:</div>
      <div className="calibration-divider"></div>

      <div className="tech-grid">
        {techCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="tech-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <div className="category-header">{category.title}</div>
            <div className="category-divider"></div>
            <div className="tech-list">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="tech-item">
                  <span className="tech-bullet">▸</span>
                  <span className="tech-name">{item.name}</span>
                  {item.proficiency && <ProficiencyBar proficiency={item.proficiency} />}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="page-indicator">PAGE 02 / 03</div>
    </motion.div>
  )
}
