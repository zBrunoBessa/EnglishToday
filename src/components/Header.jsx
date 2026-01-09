import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className={`logo ${isActive('/') ? 'active' : ''}`}>
            English Today
          </Link>
          <nav className="nav">
            <Link to="/day-phrases" className={`nav-link ${isActive('/day-phrases') ? 'active' : ''}`}>
              Day Phrases
            </Link>
            <Link to="/english-guide" className={`nav-link ${isActive('/english-guide') ? 'active' : ''}`}>
              English Guide
            </Link>
            <Link to="/test-english-level" className={`nav-link ${isActive('/test-english-level') ? 'active' : ''}`}>
              Test English Level
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

