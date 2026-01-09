# Estrutura do Projeto - EnglishToday

## 📁 Arquitetura Limpa e Organizada

```
englishtoday/
│
├── src/                          # Frontend React
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Header.jsx           # Navegação principal
│   │   └── ThemeToggle.jsx      # Switch tema claro/escuro
│   │
│   ├── context/                  # React Context
│   │   └── ThemeContext.jsx     # Gerenciamento de tema global
│   │
│   ├── pages/                    # Páginas da aplicação
│   │   ├── Home.jsx             # Landing page
│   │   ├── DayPhrases.jsx       # 20 frases diárias
│   │   ├── EnglishGuide.jsx     # Guia de aprendizado
│   │   └── TestEnglishLevel.jsx # Teste de nível
│   │
│   ├── App.jsx                   # Componente raiz com rotas
│   └── main.jsx                  # Entry point
│
├── backend/                      # Backend Serverless
│   ├── lambdas/                 # AWS Lambda Functions
│   │   ├── generateDailySentences/
│   │   │   └── index.js         # Gera 20 frases com IA
│   │   └── getDailySentences/
│   │       └── index.js         # Retorna frases atuais
│   └── package.json             # Dependências backend
│
├── infra/                        # Infrastructure as Code
│   └── (Terraform/CDK futuros)
│
├── scripts/                      # Scripts de automação
│   └── (deploy, test futuros)
│
├── .github/workflows/            # CI/CD
│   └── (GitHub Actions futuros)
│
├── public/                       # Assets estáticos
│   └── favicon.svg
│
├── package.json                  # Dependências frontend
├── vite.config.js               # Configuração Vite
├── ENV_SETUP.md                 # Guia de variáveis
└── README.md                    # Documentação principal
```

## 🎯 Páginas Ativas

### Frontend (4 páginas)
1. **Home** (`/`) - Landing page
2. **Day Phrases** (`/day-phrases`) - Prática de frases
3. **English Guide** (`/english-guide`) - Guia de estudo
4. **Test English Level** (`/test-english-level`) - Avaliação

### Backend (2 Lambdas)
1. **generateDailySentences** - Geração automática
2. **getDailySentences** - API pública

## 🧹 Limpeza Realizada

### Removido (Backend antigo Express/SQLite):
- ❌ `backend/server.js`
- ❌ `backend/routes/phrases.js`
- ❌ `backend/db/database.js`
- ❌ `backend/db/seed.js`
- ❌ `backend/db/englishtoday.db`

### Removido (Frontend):
- ❌ `src/pages/LevelA1.jsx`
- ❌ `src/pages/LevelA1.css`

### Removido (Documentação obsoleta):
- ❌ `QUICK_START.md`

### Atualizado:
- ✅ `package.json` - Removidas dependências Express/SQLite
- ✅ Scripts limpos (sem server/seed)
- ✅ Nome atualizado para `englishtoday-frontend`

## 🚀 Stack Atual

### Frontend
- React 18
- React Router DOM 6
- Vite 5

### Backend
- Node.js (ES Modules)
- AWS Lambda
- Axios (para chamadas GenAI)

### Sem dependências obsoletas
- ❌ Express
- ❌ SQLite (better-sqlite3)
- ❌ CORS
- ❌ Nodemon
- ❌ Concurrently

## 📝 Próximos Passos

1. Implementar lógica nas Lambdas
2. Criar infraestrutura AWS (Terraform/CDK)
3. Configurar DynamoDB
4. Setup CI/CD
5. Conectar frontend ao backend serverless
