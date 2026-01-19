# English Learn 🇬🇧

> Aplicação web serverless para aprendizado progressivo de inglês através de tradução e prática diária de frases estruturadas.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Stack Tecnológico](#stack-tecnológico)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [API e Backend](#api-e-backend)
- [Configuração e Desenvolvimento](#configuração-e-desenvolvimento)
- [Build e Deploy](#build-e-deploy)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Padrões e Convenções](#padrões-e-convenções)

## 🎯 Visão Geral

**English Learn** é uma SPA (Single Page Application) construída com React e arquitetura serverless na AWS, focada no aprendizado estruturado de inglês através de prática diária de tradução. O sistema apresenta 20 frases diárias selecionadas do banco de dados, permitindo que o usuário pratique tradução, visualize explicações gramaticais e acompanhe seu progresso.

### Objetivo Educacional

A metodologia baseia-se na repetição espaçada e prática ativa: 20 frases diárias × 90 dias = 1800 estruturas dominadas, proporcionando base sólida para comunicação em inglês.

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   SPA Pages  │  │  Components  │  │   Context    │  │
│  │              │  │              │  │   (Theme)    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└────────────────────────────┬────────────────────────────┘
                             │ HTTPS
                             │ REST API
┌────────────────────────────┴────────────────────────────┐
│              AWS API Gateway (REST)                      │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────┐
│          AWS Lambda (Python 3.12)                       │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Handler Function: GET /dailyphrases             │  │
│  │  - Date-based phrase selection                   │  │
│  │  - DynamoDB query                                │  │
│  │  - JSON response formatting                      │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────┐
│              AWS DynamoDB                                │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Table: DailyPhrases                             │  │
│  │  - QuestionID (Primary Key)                      │  │
│  │  - ptSentence, enSentence                        │  │
│  │  - grammarExplanation, verbTense, level          │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           AWS Amplify Hosting                           │
│  - CDN Distribution                                     │
│  - SSL/TLS Termination                                  │
│  - Continuous Deployment                                │
└─────────────────────────────────────────────────────────┘
```

### Fluxo de Dados

1. **Requisição do Usuário**: Frontend faz GET request para API Gateway
2. **API Gateway**: Roteia requisição para Lambda function
3. **Lambda Function**: 
   - Calcula hash baseado na data atual para seleção determinística
   - Consulta DynamoDB usando filtros de data/nível
   - Retorna array JSON com 20 frases formatadas
4. **Frontend**: 
   - Recebe dados via fetch API
   - Processa e formata para exibição
   - Persiste progresso no localStorage

## 💻 Stack Tecnológico

### Frontend

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 18.2.0 | Biblioteca UI declarativa e componentizada |
| **React Router DOM** | 6.30.3 | Roteamento client-side (SPA) |
| **Vite** | 5.0.8 | Build tool e dev server (ESM, HMR) |
| **CSS3** | - | Estilização modular por componente |

### Backend (AWS)

| Serviço | Especificação | Responsabilidade |
|---------|---------------|------------------|
| **AWS Lambda** | Python 3.12 | Processamento serverless, lógica de seleção de frases |
| **AWS DynamoDB** | NoSQL | Armazenamento persistente de frases e metadados |
| **AWS API Gateway** | REST API | Proxy HTTP, autenticação (opcional), rate limiting |
| **AWS Amplify** | Hosting | CDN, SSL, CI/CD para frontend |

### Ferramentas de Desenvolvimento

- **@vitejs/plugin-react**: Plugin Vite para transformação JSX/TSX
- **@types/react**: TypeScript definitions (dev dependency)

## 📁 Estrutura do Projeto

```
EnglishLearn/
├── public/
│   └── favicon.svg              # Favicon da aplicação
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Header.jsx           # Cabeçalho com navegação e theme toggle
│   │   ├── Header.css
│   │   ├── ThemeToggle.jsx      # Toggle dark/light mode
│   │   └── ThemeToggle.css
│   ├── context/
│   │   └── ThemeContext.jsx     # Context API para gerenciamento de tema
│   ├── pages/                   # Componentes de página (rotas)
│   │   ├── Home.jsx             # Landing page
│   │   ├── Home.css
│   │   ├── DayPhrases.jsx       # Página principal: 20 frases diárias
│   │   ├── DayPhrases.css
│   │   ├── TestEnglishLevel.jsx # Teste de nivelamento
│   │   ├── TestEnglishLevel.css
│   │   ├── EnglishGuide.jsx     # Guia de aprendizado
│   │   └── EnglishGuide.css
│   ├── App.jsx                  # Componente raiz, configuração de rotas
│   ├── App.css                  # Estilos globais da aplicação
│   ├── main.jsx                 # Entry point, renderização React
│   ├── index.css                # Reset CSS e variáveis globais
│   └── config.js                # Configuração de API endpoints
├── index.html                   # Template HTML base
├── vite.config.js               # Configuração do Vite
├── package.json                 # Dependencies e scripts
└── README.md                    # Documentação
```

### Organização de Código

- **Separação por Feature**: Cada página possui seu próprio componente e CSS
- **CSS Modules Implícito**: Arquivos `.css` importados localmente por componente
- **Context Pattern**: Theme gerenciado via React Context API
- **Configuration File**: Endpoints e URLs centralizadas em `config.js`

## ⚙️ Funcionalidades

### 1. Frases Diárias (`/day-phrases`)

**Comportamento Técnico:**
- Fetch assíncrono de 20 frases via REST API no mount do componente
- Seleção determinística baseada em data (mesmas frases no mesmo dia)
- Estado de loading durante requisição
- Tratamento de erros com retry manual
- Persistência de progresso em `localStorage`

**Features:**
- **Input de Tradução**: Textarea para resposta do usuário
- **Validação**: Exige resposta antes de mostrar correção
- **Reveal Answer**: Mostra resposta correta e explicação gramatical
- **Progress Tracking**: 
  - Barra de progresso visual (0-100%)
  - Checkbox para marcar frases como concluídas
  - Persistência entre sessões (mesmo dia)
  - Reset automático ao mudar de dia
- **Completion Modal**: Modal de celebração ao completar todas as frases
- **Keyboard Shortcuts**: Enter para confirmar resposta

**Estrutura de Dados (API Response):**
```json
[
  {
    "QuestionID": "Q-001",
    "ptSentence": "Eu estudo inglês todos os dias.",
    "enSentence": "I study English every day.",
    "grammarExplanation": "Simple Present: hábitos e rotinas",
    "verbTense": "Present Simple",
    "level": "A1"
  }
]
```

### 2. Sistema de Tema Dark/Light

**Implementação:**
- Context API (`ThemeContext`) para estado global
- Preferência do usuário detectada via `prefers-color-scheme`
- Persistência em `localStorage`
- Transições suaves com CSS variables
- Toggle manual via componente `ThemeToggle`

### 3. Roteamento

**Rotas Disponíveis:**
- `/` - Home (landing page)
- `/day-phrases` - Frases diárias (feature principal)
- `/test-english-level` - Teste de nivelamento
- `/english-guide` - Guia de aprendizado

**Tecnologia:** React Router v6 com `BrowserRouter` (HTML5 History API)

### 4. Responsividade

- Mobile-first approach
- Breakpoints CSS para tablets e desktop
- Layout adaptativo dos componentes

## 🔌 API e Backend

### Endpoint

```
GET https://90f4l1q0jb.execute-api.us-east-2.amazonaws.com/dailyphrases
```

### Especificação

**Método:** `GET`  
**Content-Type:** `application/json`  
**CORS:** Habilitado para domínio do frontend

**Response (200 OK):**
```json
[
  {
    "QuestionID": "string",
    "ptSentence": "string",
    "enSentence": "string",
    "grammarExplanation": "string",
    "verbTense": "string",
    "level": "string (A1-A2-B1-B2-C1-C2)"
  }
]
```

**Response (Error):**
```json
{
  "error": "Error message"
}
```

**Status Codes:**
- `200`: Sucesso, array de frases retornado
- `400`: Bad Request
- `500`: Internal Server Error

### Lógica Backend (Lambda)

A função Lambda implementa seleção determinística:
1. Gera hash baseado na data atual (YYYY-MM-DD)
2. Usa hash para selecionar subset consistente do DynamoDB
3. Aplica filtros opcionais (nível, tópico)
4. Retorna exatamente 20 frases formatadas

**Vantagens:**
- Mesmas frases para todos os usuários no mesmo dia
- Rotação automática diária
- Cache-friendly (mesma resposta por dia)

### DynamoDB Schema

**Table:** `DailyPhrases`

| Atributo | Tipo | Descrição |
|----------|------|-----------|
| `QuestionID` | String (PK) | Identificador único da questão |
| `ptSentence` | String | Frase em português |
| `enSentence` | String | Frase em inglês (resposta correta) |
| `grammarExplanation` | String | Explicação gramatical |
| `verbTense` | String | Tempo verbal |
| `level` | String | Nível CEFR (A1-C2) |
| `topic` | String | Tópico gramatical (opcional) |
| `createdAt` | Number | Timestamp de criação |

## 🛠️ Configuração e Desenvolvimento

### Pré-requisitos

- **Node.js**: >= 16.x (recomendado LTS)
- **npm**: >= 8.x (incluído com Node.js)
- **Git**: Para versionamento

### Instalação

1. **Clone o repositório:**
```bash
git clone <repository-url>
cd EnglishLearn
```

2. **Instale as dependências:**
```bash
npm install
```

Este comando instala:
- `react` e `react-dom`: Core do React
- `react-router-dom`: Roteamento
- `vite` e `@vitejs/plugin-react`: Build tool e dev server
- Type definitions (dev)

### Desenvolvimento Local

**Iniciar servidor de desenvolvimento:**
```bash
npm run dev
```

**Comportamento:**
- Servidor Vite inicia em `http://localhost:5173` (porta padrão)
- Hot Module Replacement (HMR) ativo
- Live reload em alterações de código
- Source maps habilitados para debugging

**Variáveis de Ambiente (Opcional):**

Crie `.env.local` para sobrescrever configurações:
```env
VITE_API_URL=https://your-api-url.com
```

Acesse via `import.meta.env.VITE_API_URL` no código.

### Estrutura de Build

```bash
npm run build
```

**Saída:**
- Diretório `dist/` criado com assets otimizados
- HTML, CSS e JS minificados e otimizados
- Code splitting automático (lazy loading)
- Assets estáticos copiados para `dist/assets/`

**Preview do Build:**
```bash
npm run preview
```

Serve `dist/` localmente para testar build de produção.

## 🚀 Build e Deploy

### Build de Produção

```bash
npm run build
```

**Otimizações Aplicadas:**
- Minificação de JavaScript (esbuild)
- Minificação de CSS
- Tree-shaking (remoção de código não utilizado)
- Code splitting por rota
- Asset optimization (imagens, fonts)

### Deploy AWS Amplify

**Configuração Automática:**
1. Conecte repositório Git ao Amplify Console
2. Amplify detecta `package.json` e configura build automaticamente
3. Build command: `npm run build`
4. Publish directory: `dist`

**CI/CD:**
- Deploy automático em push para branch principal
- Preview deployments para PRs
- Rollback automático em caso de erro

**CDN e Performance:**
- Distribuição global via CloudFront
- Cache de assets estáticos
- GZIP/Brotli compression
- HTTP/2 e HTTP/3

### Configuração Manual (Alternativa)

**Upload para S3 + CloudFront:**
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 📊 Gerenciamento de Estado

### Estado Local (Component State)

**DayPhrases Component:**
- `phrases`: Array de frases carregadas da API
- `loading`: Estado de carregamento
- `error`: Mensagem de erro
- `userAnswers`: Objeto `{ phraseId: answer }`
- `showAnswers`: Objeto `{ phraseId: boolean }`
- `completedPhrases`: Array de IDs concluídos
- `confirmingPhrases`: Estado de confirmação

**Hooks Utilizados:**
- `useState`: Estado local do componente
- `useEffect`: Side effects (fetch, localStorage sync)
- `useContext`: Acesso ao ThemeContext

### Persistência (localStorage)

**Chaves Utilizadas:**
- `dayPhrasesDate`: Data atual (YYYY-MM-DD)
- `dayPhrasesAnswers`: Respostas do usuário (JSON)
- `dayPhrasesShown`: Frases com resposta revelada (JSON)
- `dayPhrasesProgress`: IDs de frases concluídas (JSON)
- `theme`: Preferência de tema ('light' | 'dark')

**Estratégia:**
- Sincronização automática via `useEffect`
- Reset automático ao mudar de dia
- Validação de dados ao carregar (filtrar IDs inválidos)

### Estado Global (Context API)

**ThemeContext:**
```javascript
{
  theme: 'light' | 'dark',
  toggleTheme: () => void
}
```

**Provider:** Envolve `App` component  
**Consumer:** Componentes via `useContext(ThemeContext)`

## 📝 Padrões e Convenções

### Nomenclatura

- **Componentes**: PascalCase (`DayPhrases.jsx`)
- **Arquivos CSS**: Mesmo nome do componente (`DayPhrases.css`)
- **Variáveis/Funções**: camelCase (`fetchPhrases`, `userAnswers`)
- **Constantes**: UPPER_SNAKE_CASE (em `config.js`)

### Estrutura de Componentes

```javascript
// 1. Imports
import React, { useState, useEffect } from 'react'
import './Component.css'
import config from '../config'

// 2. Function Component
function Component() {
  // 3. State declarations
  const [state, setState] = useState()
  
  // 4. Effects
  useEffect(() => { ... }, [])
  
  // 5. Event handlers
  const handleEvent = () => { ... }
  
  // 6. Render
  return <div>...</div>
}

export default Component
```

### CSS

- **BEM-like naming**: `.component-name`, `.component-name__element`, `.component-name--modifier`
- **CSS Variables**: Para temas e valores reutilizáveis
- **Mobile-first**: Media queries com `min-width`

### Tratamento de Erros

- Try-catch em operações assíncronas
- Estado de erro dedicado no componente
- UI de erro com opção de retry
- Console.error para debugging

### Performance

- **Lazy Loading**: Importação dinâmica de rotas (futuro)
- **Memoization**: `React.memo` quando necessário
- **Debounce**: Em inputs de busca (futuro)
- **Code Splitting**: Automático via Vite

## 🔒 Segurança

- **HTTPS**: Enforced em produção (Amplify)
- **CORS**: Configurado no API Gateway
- **Sanitização**: Validação de inputs do usuário
- **XSS Prevention**: React escapa automaticamente valores

## 📈 Status do Projeto

**Status:** ✅ **Em Produção**

**Versão:** 1.0.0

**Última Atualização:** 2024

---

**Desenvolvido com** ❤️ **para aprendizado eficiente de inglês**