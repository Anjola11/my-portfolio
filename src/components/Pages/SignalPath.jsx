import { motion } from 'framer-motion'
import './SignalPath.css'
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

const channels = [
  {
    id: 1,
    name: 'GITHUB',
    type: 'Source Repository',
    url: 'https://github.com/Anjola11',
    status: 'Active'
  },
  {
    id: 2,
    name: 'LINKEDIN',
    type: 'Professional Network',
    url: '#',
    status: 'Coming Soon'
  },
  {
    id: 3,
    name: 'EMAIL',
    type: 'Direct Communication',
    url: 'mailto:aladeniyiaanu@gmail.com',
    status: 'Active',
    extra: 'RESPONSE_TIME: <24hrs'
  }
]

export default function SignalPath() {
  return (
    <motion.div
      className="page-container signal-path-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="page-header">
        <h2 className="page-title">SIGNAL TRANSMISSION</h2>
        <div className="page-subtitle">COMMUNICATION CHANNELS</div>
      </div>

      <div className="channels-container">
        {channels.map((channel, idx) => (
          <motion.div
            key={channel.id}
            className="channel-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: '8px 8px 0px var(--text-primary)' }}
          >
            <div className="channel-header">
              CHANNEL_0{channel.id}: {channel.name}
            </div>
            <div className="channel-divider"></div>
            
            <div className="channel-info">
              <div className="channel-row">
                <span className="info-key">TYPE:</span>
                <span className="info-value">{channel.type}</span>
              </div>
              <div className="channel-row">
                <span className="info-key">URL:</span>
                <span className="info-value">{channel.url.replace('https://', '').replace('mailto:', '')}</span>
              </div>
              <div className="channel-row">
                <span className="info-key">STATUS:</span>
                <span className="info-value status-active">{channel.status}</span>
              </div>
              {channel.extra && (
                <div className="channel-row">
                  <span className="info-value extra-info">{channel.extra}</span>
                </div>
              )}
            </div>

            <motion.a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="connection-button"
              whileTap={{ scale: 0.95 }}
            >
              {channel.name === 'EMAIL' ? 'INITIATE_TRANSMISSION →' : 'ESTABLISH_CONNECTION →'}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <div className="page-indicator">PAGE 03 / 05</div>
      <PageNavigation />
    </motion.div>
  )
}
