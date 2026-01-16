import React, { useState, useEffect } from 'react'
import './DayPhrases.css'
import config from '../config'

function DayPhrases() {
  const [phrases, setPhrases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userAnswers, setUserAnswers] = useState({})
  const [showAnswers, setShowAnswers] = useState({})
  const [completedPhrases, setCompletedPhrases] = useState([])
  const [confirmingPhrases, setConfirmingPhrases] = useState({})
  const [showCompletionModal, setShowCompletionModal] = useState(false)

  // Fetch phrases from API
  useEffect(() => {
    fetchPhrases()
  }, [])

  const fetchPhrases = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${config.API_URL}${config.endpoints.phrases}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch phrases')
      }
      
      const data = await response.json()
      
      if (data && Array.isArray(data) && data.length > 0) {
        const formattedPhrases = data.map((phrase, index) => ({
          id: phrase.QuestionID || `Q-${index + 1}`,
          question: phrase.ptSentence,
          correct_answer: phrase.enSentence,
          explanation: `${phrase.grammarExplanation || ''} (${phrase.verbTense || ''} - Nível ${phrase.level || ''})`
        }))
        setPhrases(formattedPhrases)
      } else {
        throw new Error('No phrases found')
      }
    } catch (err) {
      console.error('Error fetching phrases:', err)
      setError('Não foi possível carregar as frases do servidor.')
    } finally {
      setLoading(false)
    }
  }

  // Carregar progresso salvo (só se as frases corresponderem)
  useEffect(() => {
    if (phrases.length === 0) return
    
    const savedDate = localStorage.getItem('dayPhrasesDate')
    const today = new Date().toISOString().split('T')[0]
    
    // Se for um dia diferente, limpa o progresso
    if (savedDate !== today) {
      localStorage.removeItem('dayPhrasesAnswers')
      localStorage.removeItem('dayPhrasesShown')
      localStorage.removeItem('dayPhrasesProgress')
      localStorage.setItem('dayPhrasesDate', today)
      return
    }
    
    const savedAnswers = localStorage.getItem('dayPhrasesAnswers')
    const savedShown = localStorage.getItem('dayPhrasesShown')
    const savedCompleted = localStorage.getItem('dayPhrasesProgress')
    
    const phraseIds = phrases.map(p => p.id)
    
    if (savedAnswers) {
      const parsed = JSON.parse(savedAnswers)
      const filtered = Object.fromEntries(
        Object.entries(parsed).filter(([id]) => phraseIds.includes(id))
      )
      setUserAnswers(filtered)
    }
    if (savedShown) {
      const parsed = JSON.parse(savedShown)
      const filtered = Object.fromEntries(
        Object.entries(parsed).filter(([id]) => phraseIds.includes(id))
      )
      setShowAnswers(filtered)
    }
    if (savedCompleted) {
      const parsed = JSON.parse(savedCompleted)
      const filtered = parsed.filter(id => phraseIds.includes(id))
      setCompletedPhrases(filtered)
    }
  }, [phrases])

  // Salvar progresso
  useEffect(() => {
    if (phrases.length === 0) return
    localStorage.setItem('dayPhrasesAnswers', JSON.stringify(userAnswers))
  }, [userAnswers, phrases.length])

  useEffect(() => {
    if (phrases.length === 0) return
    localStorage.setItem('dayPhrasesShown', JSON.stringify(showAnswers))
  }, [showAnswers, phrases.length])

  useEffect(() => {
    if (phrases.length === 0) return
    localStorage.setItem('dayPhrasesProgress', JSON.stringify(completedPhrases))
  }, [completedPhrases, phrases.length])

  const handleUncheck = (phraseId) => {
    const newShowAnswers = { ...showAnswers }
    delete newShowAnswers[phraseId]
    setShowAnswers(newShowAnswers)
    setCompletedPhrases(completedPhrases.filter(id => id !== phraseId))
  }

  const handleCheckAnswer = async (phraseId) => {
    const userAnswer = userAnswers[phraseId] || ''
    const isConfirming = confirmingPhrases[phraseId] || false
    
    if (isConfirming) {
      setShowAnswers({
        ...showAnswers,
        [phraseId]: true
      })
      if (!completedPhrases.includes(phraseId)) {
        setCompletedPhrases([...completedPhrases, phraseId])
      }
      const newConfirming = { ...confirmingPhrases }
      delete newConfirming[phraseId]
      setConfirmingPhrases(newConfirming)
      return
    }
    
    if (userAnswer.trim()) {
      setShowAnswers({
        ...showAnswers,
        [phraseId]: true
      })
      if (!completedPhrases.includes(phraseId)) {
        setCompletedPhrases([...completedPhrases, phraseId])
      }
    } else {
      setConfirmingPhrases({
        ...confirmingPhrases,
        [phraseId]: true
      })
    }
  }

  const handleAnswerChange = (phraseId, value) => {
    setUserAnswers({
      ...userAnswers,
      [phraseId]: value
    })
    // Remove do estado de confirmação se o usuário começar a digitar
    if (confirmingPhrases[phraseId]) {
      const newConfirming = { ...confirmingPhrases }
      delete newConfirming[phraseId]
      setConfirmingPhrases(newConfirming)
    }
  }

  const handleReset = () => {
    setUserAnswers({})
    setShowAnswers({})
    setCompletedPhrases([])
    setConfirmingPhrases({})
    localStorage.removeItem('dayPhrasesAnswers')
    localStorage.removeItem('dayPhrasesShown')
    localStorage.removeItem('dayPhrasesProgress')
  }

  // Show completion modal when all phrases are completed
  useEffect(() => {
    if (completedPhrases.length === phrases.length && phrases.length > 0) {
      const timer = setTimeout(() => {
        setShowCompletionModal(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [completedPhrases.length, phrases.length])

  const progress = phrases.length > 0 ? (completedPhrases.length / phrases.length) * 100 : 0

  if (loading) {
    return (
      <div className="day-phrases-page">
        <div className="container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Carregando frases...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="day-phrases-page">
        <div className="container">
          <div className="error-state">
            <h2>⚠️ Erro</h2>
            <p>{error}</p>
            <button onClick={fetchPhrases} className="btn-primary">
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="day-phrases-page">
      <div className="container">
        <div className="phrases-header">
          <h1>Day Phrases</h1>
          <div className="progress-info">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="completed-counter">
              Completadas: {completedPhrases.length} / {phrases.length}
            </p>
            {completedPhrases.length === phrases.length && (
              <button onClick={handleReset} className="btn-reset">
                Reiniciar Todas
              </button>
            )}
          </div>
        </div>

        <div className="phrases-list">
            {phrases.map((phrase, index) => {
              const userAnswer = userAnswers[phrase.id] || ''
              const showAnswer = showAnswers[phrase.id] || false
              const isCompleted = completedPhrases.includes(phrase.id)

              return (
                <div key={phrase.id} className="phrase-item">
                  <div className="phrase-header-row">
                    <div className="phrase-question">
                      <h2>{phrase.question}</h2>
                    </div>
                    <div className="phrase-number">
                      {index + 1} / {phrases.length}
                    </div>
                  </div>

                  <div className="answer-section">
                    <label htmlFor={`answer-${phrase.id}`}>Sua resposta:</label>
                    <textarea
                      id={`answer-${phrase.id}`}
                      className="answer-input"
                      value={userAnswer}
                      onChange={(e) => handleAnswerChange(phrase.id, e.target.value)}
                      placeholder="Digite sua resposta em inglês aqui..."
                      rows="1"
                      disabled={showAnswer}
                    />
                  </div>

                  <div className="check-buttons">
                    {showAnswer ? (
                      <button
                        onClick={() => handleUncheck(phrase.id)}
                        className="btn-secondary"
                      >
                        ✕ Desverificar
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCheckAnswer(phrase.id)}
                        className="btn-primary"
                      >
                        {confirmingPhrases[phrase.id] 
                          ? 'Tem certeza?' 
                          : 'Verificar Resposta'}
                      </button>
                    )}
                  </div>

                  {showAnswer && (
                    <div className="answer-result">
                      <div className="result-box">
                        <h3>Resposta Correta:</h3>
                        <p className="correct-answer">{phrase.correct_answer}</p>
                        <div className="explanation">
                          <strong>Explicação:</strong>
                          <p>{phrase.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
        </div>

        {showCompletionModal && (
          <div className="modal-overlay" onClick={() => setShowCompletionModal(false)}>
            <div className="modal-content completion-modal" onClick={(e) => e.stopPropagation()}>
              <div className="completion-icon">🎉</div>
              <h3>Parabéns! Você completou todas as {phrases.length} frases!</h3>
              <p>
                Você está no caminho certo! A consistência é a chave para aprender inglês.
                Continue praticando todos os dias e você verá seu progresso crescer.
              </p>
              <p className="completion-encouragement">
                <strong>Lembre-se:</strong> Cada frase que você pratica é um passo em direção à fluência.
                Não desista, você está fazendo um ótimo trabalho! 💪
              </p>
              <div className="modal-buttons">
                <button onClick={() => setShowCompletionModal(false)} className="btn-primary">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DayPhrases

