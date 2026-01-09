import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'
import TestEnglishLevel from './pages/TestEnglishLevel'
import EnglishGuide from './pages/EnglishGuide'
import DayPhrases from './pages/DayPhrases'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test-english-level" element={<TestEnglishLevel />} />
            <Route path="/english-guide" element={<EnglishGuide />} />
            <Route path="/day-phrases" element={<DayPhrases />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
