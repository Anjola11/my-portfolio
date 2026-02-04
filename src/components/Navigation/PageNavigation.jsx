import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PageNavigation.css'

const routes = ['/', '/projects', '/instrumentation', '/contact', '/education']

export default function PageNavigation() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const currentIndex = routes.indexOf(location.pathname)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < routes.length - 1
  
  const goToPrevious = () => {
    if (hasPrevious) {
      navigate(routes[currentIndex - 1])
    }
  }
  
  const goToNext = () => {
    if (hasNext) {
      navigate(routes[currentIndex + 1])
    }
  }
  
  return (
    <div className="page-navigation">
      {hasPrevious ? (
        <motion.button
          className="nav-arrow nav-arrow-prev"
          onClick={goToPrevious}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous page"
        >
          ←
        </motion.button>
      ) : (
        <div className="nav-spacer"></div>
      )}
      
      {hasNext ? (
        <motion.button
          className="nav-arrow nav-arrow-next"
          onClick={goToNext}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next page"
        >
          →
        </motion.button>
      ) : (
        <div className="nav-spacer"></div>
      )}
    </div>
  )
}
