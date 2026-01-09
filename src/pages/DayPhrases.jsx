import React, { useState, useEffect } from 'react'
import './DayPhrases.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

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
      
      const response = await fetch(`${API_URL}/phrases/daily`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch phrases')
      }
      
      const data = await response.json()
      
      if (data.phrases && data.phrases.length > 0) {
        // Convert database format to component format
        const formattedPhrases = data.phrases.map((phrase, index) => ({
          id: phrase.id,
          question: phrase.english,
          correct_answer: phrase.portuguese,
          explanation: `Tradução: ${phrase.portuguese}`
        }))
        setPhrases(formattedPhrases)
      } else {
        // Use fallback phrases if no data from API
        setPhrases(phrases_old)
      }
    } catch (err) {
      console.error('Error fetching phrases:', err)
      setError('Não foi possível carregar as frases. Usando frases locais.')
      setPhrases(phrases_old)
    } finally {
      setLoading(false)
    }
  }

  const phrases_old = [
    {
      id: 1,
      question: "How would you do?",
      correctAnswer: "How would you do it?",
      explanation: "Esta frase pergunta como você faria algo. É uma forma de pedir uma explicação sobre um método ou processo."
    },
    {
      id: 2,
      question: "What's your name?",
      correctAnswer: "My name is [seu nome]",
      explanation: "Resposta padrão quando alguém pergunta seu nome. Você pode substituir [seu nome] pelo seu nome real."
    },
    {
      id: 3,
      question: "How are you?",
      correctAnswer: "I'm fine, thank you. And you?",
      explanation: "Resposta educada e comum para a pergunta 'Como você está?'. Você também pode responder 'I'm good' ou 'I'm doing well'."
    },
    {
      id: 4,
      question: "Where are you from?",
      correctAnswer: "I'm from [país/cidade]",
      explanation: "Use esta estrutura para dizer de onde você é. Exemplo: 'I'm from Brazil' ou 'I'm from São Paulo'."
    },
    {
      id: 5,
      question: "What do you do?",
      correctAnswer: "I'm a [profissão] / I work as a [profissão]",
      explanation: "Resposta para perguntar sobre sua profissão. Exemplo: 'I'm a teacher' ou 'I work as an engineer'."
    },
    {
      id: 6,
      question: "Can you help me?",
      correctAnswer: "Of course! / Sure! / I'd be happy to help.",
      explanation: "Respostas positivas para quando alguém pede ajuda. Todas são educadas e comuns."
    },
    {
      id: 7,
      question: "What time is it?",
      correctAnswer: "It's [hora]",
      explanation: "Forma de dizer as horas. Exemplo: 'It's 3 o'clock' ou 'It's half past two'."
    },
    {
      id: 8,
      question: "How much does it cost?",
      correctAnswer: "It costs [preço]",
      explanation: "Resposta para informar o preço de algo. Exemplo: 'It costs $10' ou 'It costs 50 dollars'."
    },
    {
      id: 9,
      question: "Where is the bathroom?",
      correctAnswer: "It's over there / It's on the left / It's on the right",
      explanation: "Respostas comuns para indicar a localização do banheiro. Use gestos para ajudar."
    },
    {
      id: 10,
      question: "Do you speak English?",
      correctAnswer: "Yes, I do. / Yes, a little. / No, I don't.",
      explanation: "Respostas honestas sobre sua habilidade em inglês. Seja sincero sobre seu nível."
    },
    {
      id: 11,
      question: "What's the weather like?",
      correctAnswer: "It's sunny / It's raining / It's cold / It's hot",
      explanation: "Formas de descrever o clima. Use adjetivos simples para descrever as condições."
    },
    {
      id: 12,
      question: "How do you spell that?",
      correctAnswer: "It's spelled [letras]",
      explanation: "Quando alguém pede para soletrar, diga as letras uma por uma. Exemplo: 'It's spelled C-A-T'."
    },
    {
      id: 13,
      question: "What's your phone number?",
      correctAnswer: "My phone number is [número]",
      explanation: "Forma de dar seu número de telefone. Diga os números um por um ou em grupos."
    },
    {
      id: 14,
      question: "Nice to meet you!",
      correctAnswer: "Nice to meet you too!",
      explanation: "Resposta educada quando alguém diz 'prazer em conhecê-lo'. O 'too' significa 'também'."
    },
    {
      id: 15,
      question: "I'm sorry.",
      correctAnswer: "That's okay. / No problem. / Don't worry about it.",
      explanation: "Respostas educadas quando alguém se desculpa. Todas são aceitáveis e comuns."
    },
    {
      id: 16,
      question: "Excuse me.",
      correctAnswer: "Yes? / How can I help you?",
      explanation: "Respostas quando alguém diz 'com licença' para chamar sua atenção."
    },
    {
      id: 17,
      question: "Thank you very much!",
      correctAnswer: "You're welcome! / My pleasure! / Don't mention it!",
      explanation: "Respostas educadas para 'obrigado'. Todas são apropriadas e comuns."
    },
    {
      id: 18,
      question: "See you later!",
      correctAnswer: "See you! / See you soon! / Bye!",
      explanation: "Formas de se despedir quando alguém diz 'até logo'. Todas são informais e amigáveis."
    },
    {
      id: 19,
      question: "What's this?",
      correctAnswer: "It's a [objeto] / This is a [objeto]",
      explanation: "Resposta para identificar um objeto. Use 'a' antes de substantivos que começam com consoante, 'an' antes de vogais."
    },
    {
      id: 20,
      question: "I don't understand.",
      correctAnswer: "Let me explain. / Can you repeat that? / I'll help you.",
      explanation: "Respostas úteis quando alguém diz que não entendeu. Ofereça ajuda ou peça para repetir."
    }
  ]

  // Carregar progresso salvo
  useEffect(() => {
    const savedAnswers = localStorage.getItem('dayPhrasesAnswers')
    const savedShown = localStorage.getItem('dayPhrasesShown')
    const savedCompleted = localStorage.getItem('dayPhrasesProgress')
    
    if (savedAnswers) {
      setUserAnswers(JSON.parse(savedAnswers))
    }
    if (savedShown) {
      setShowAnswers(JSON.parse(savedShown))
    }
    if (savedCompleted) {
      setCompletedPhrases(JSON.parse(savedCompleted))
    }
  }, [])

  // Salvar progresso
  useEffect(() => {
    localStorage.setItem('dayPhrasesAnswers', JSON.stringify(userAnswers))
  }, [userAnswers])

  useEffect(() => {
    localStorage.setItem('dayPhrasesShown', JSON.stringify(showAnswers))
  }, [showAnswers])

  useEffect(() => {
    localStorage.setItem('dayPhrasesProgress', JSON.stringify(completedPhrases))
  }, [completedPhrases])

  const handleCheckAnswer = async (phraseId) => {
    const userAnswer = userAnswers[phraseId] || ''
    const isConfirming = confirmingPhrases[phraseId] || false
    
    // Se está no estado "Tem certeza?", mostra a resposta
    if (isConfirming) {
      setShowAnswers({
        ...showAnswers,
        [phraseId]: true
      })
      if (!completedPhrases.includes(phraseId)) {
        setCompletedPhrases([...completedPhrases, phraseId])
      }
      // Remove do estado de confirmação
      const newConfirming = { ...confirmingPhrases }
      delete newConfirming[phraseId]
      setConfirmingPhrases(newConfirming)
      
      // Save progress to backend (optional)
      try {
        const phrase = phrases.find(p => p.id === phraseId)
        if (phrase) {
          await fetch(`${API_URL}/phrases/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phrase_id: phraseId,
              user_answer: userAnswer,
              is_correct: userAnswer.trim().toLowerCase() === phrase.correct_answer.toLowerCase()
            })
          })
        }
      } catch (err) {
        console.error('Error saving progress:', err)
      }
      
      return
    }
    
    // Se tem resposta, mostra direto
    if (userAnswer.trim()) {
      setShowAnswers({
        ...showAnswers,
        [phraseId]: true
      })
      if (!completedPhrases.includes(phraseId)) {
        setCompletedPhrases([...completedPhrases, phraseId])
      }
      
      // Save progress to backend (optional)
      try {
        const phrase = phrases.find(p => p.id === phraseId)
        if (phrase) {
          await fetch(`${API_URL}/phrases/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phrase_id: phraseId,
              user_answer: userAnswer,
              is_correct: userAnswer.trim().toLowerCase() === phrase.correct_answer.toLowerCase()
            })
          })
        }
      } catch (err) {
        console.error('Error saving progress:', err)
      }
    } else {
      // Se não tem resposta, muda o texto para "Tem certeza?"
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
                    <button
                      onClick={() => handleCheckAnswer(phrase.id)}
                      className="btn-primary"
                      disabled={showAnswer}
                    >
                      {showAnswer 
                        ? '✓ Verificado' 
                        : confirmingPhrases[phrase.id] 
                        ? 'Tem certeza?' 
                        : 'Verificar Resposta'}
                    </button>
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

