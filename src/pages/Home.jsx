import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">Todo dia 20 novas frases para você praticar</h1>
          <p className="home-subtitle">
            Pratique inglês todos os dias com frases selecionadas especialmente para você
          </p>
          <Link to="/day-phrases" className="btn-primary btn-large">
            Começar Agora
          </Link>
          
          <div className="home-help">
            <p className="help-text">
              Não sabe como começar o ingles ou seu nível ainda é baixo?
            </p>
            <Link to="/english-guide" className="help-link">
              Clique aqui para aprender o jeito certo!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

