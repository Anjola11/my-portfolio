import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ onMenuClick, isSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">AANU</div>
        
        {!isSidebarOpen && (
          <button 
            className="navbar-hamburger" 
            onClick={onMenuClick}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </nav>
  )
}
