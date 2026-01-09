import React, { useState } from 'react'
import './TestEnglishLevel.css'

function TestEnglishLevel() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState('')

  const questions = [
    {
      id: 1,
      question: "What is your name?",
      options: ["Qual é o seu nome?", "Como você está?", "Onde você mora?", "Que horas são?"],
      correct: 0
    },
    {
      id: 2,
      question: "How are you?",
      options: ["Como você está?", "Onde você está?", "Quem é você?", "O que você faz?"],
      correct: 0
    },
    {
      id: 3,
      question: "Where do you live?",
      options: ["Onde você trabalha?", "Onde você mora?", "Onde você estuda?", "Onde você vai?"],
      correct: 1
    },
    {
      id: 4,
      question: "I ___ a student.",
      options: ["am", "is", "are", "be"],
      correct: 0
    },
    {
      id: 5,
      question: "She ___ to school every day.",
      options: ["go", "goes", "going", "went"],
      correct: 1
    },
    {
      id: 6,
      question: "What time ___ it?",
      options: ["is", "are", "am", "be"],
      correct: 0
    },
    {
      id: 7,
      question: "I have ___ apple.",
      options: ["a", "an", "the", "some"],
      correct: 1
    },
    {
      id: 8,
      question: "They ___ playing soccer.",
      options: ["is", "am", "are", "be"],
      correct: 2
    },
    {
      id: 9,
      question: "I ___ like coffee.",
      options: ["don't", "doesn't", "isn't", "aren't"],
      correct: 0
    },
    {
      id: 10,
      question: "Can you ___ me?",
      options: ["help", "helps", "helping", "helped"],
      correct: 0
    },
    {
      id: 11,
      question: "I ___ to the store yesterday.",
      options: ["go", "goes", "went", "going"],
      correct: 2
    },
    {
      id: 12,
      question: "She is ___ than me.",
      options: ["tall", "taller", "tallest", "more tall"],
      correct: 1
    },
    {
      id: 13,
      question: "I have ___ finished my homework.",
      options: ["yet", "already", "still", "just"],
      correct: 1
    },
    {
      id: 14,
      question: "If I ___ rich, I would travel.",
      options: ["am", "was", "were", "be"],
      correct: 2
    },
    {
      id: 15,
      question: "The book ___ by many people.",
      options: ["read", "reads", "is read", "are read"],
      correct: 2
    },
    {
      id: 16,
      question: "I ___ studying for 3 hours.",
      options: ["have been", "has been", "am", "was"],
      correct: 0
    },
    {
      id: 17,
      question: "She suggested ___ to the beach.",
      options: ["go", "going", "to go", "went"],
      correct: 1
    },
    {
      id: 18,
      question: "I wish I ___ speak French.",
      options: ["can", "could", "will", "would"],
      correct: 1
    },
    {
      id: 19,
      question: "By next year, I ___ graduated.",
      options: ["will", "will have", "have", "had"],
      correct: 1
    },
    {
      id: 20,
      question: "Not only ___ she sing, but she also dances.",
      options: ["does", "do", "did", "will"],
      correct: 0
    }
  ]

  const handleAnswer = (answerIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: answerIndex }
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResult = () => {
    let correctAnswers = 0
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correctAnswers++
      }
    })
    
    setScore(correctAnswers)
    const percentage = (correctAnswers / questions.length) * 100
    
    if (percentage >= 90) {
      setLevel('C2 - Proficient')
    } else if (percentage >= 80) {
      setLevel('C1 - Advanced')
    } else if (percentage >= 70) {
      setLevel('B2 - Upper Intermediate')
    } else if (percentage >= 60) {
      setLevel('B1 - Intermediate')
    } else if (percentage >= 40) {
      setLevel('A2 - Elementary')
    } else {
      setLevel('A1 - Beginner')
    }
    
    setShowResult(true)
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setScore(0)
    setLevel('')
  }

  if (showResult) {
    return (
      <div className="test-page">
        <div className="container">
          <div className="result-container">
            <h1 className="result-title">Resultado do Teste</h1>
            <div className="result-score">
              <div className="score-number">{score} / {questions.length}</div>
              <div className="score-percentage">
                {Math.round((score / questions.length) * 100)}%
              </div>
            </div>
            <div className="result-level">
              <h2>Seu Nível:</h2>
              <div className="level-badge">{level}</div>
            </div>
            <button onClick={resetTest} className="btn-primary">
              Fazer Teste Novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="test-page">
      <div className="container">
        <div className="test-container">
          <div className="test-header">
            <h1>Test English Level</h1>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="question-counter">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <div className="question-container">
            <h2 className="question-text">{currentQ.question}</h2>
            
            <div className="options-container">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${answers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="test-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestEnglishLevel

