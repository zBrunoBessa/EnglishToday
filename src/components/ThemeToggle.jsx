import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className={`theme-toggle ${isDark ? 'dark' : ''}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          <span className="theme-toggle-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
