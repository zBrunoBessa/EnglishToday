# EnglishToday Backend - Serverless Lambdas

## 📁 Estrutura

```
backend/
├── libs/                           # Shared libraries
│   ├── dynamodb.js                # DynamoDB client (AWS SDK v3)
│   └── dailySentencesRepository.js # Repository for sentences CRUD
│
├── lambdas/                        # Lambda functions
│   ├── generateDailySentences/    # Generate 20 sentences daily
│   │   └── index.js
│   └── getDailySentences/         # Get current sentences
│       └── index.js
│
└── package.json                    # Dependencies
```

## 🔧 Lambdas

### 1. getDailySentences
**Status:** ✅ Implementado

**Trigger:** API Gateway (GET /phrases/daily)

**Função:** Busca as 20 frases do dia atual do DynamoDB

**Responses:**
- `200` - Sucesso, retorna frases
- `404` - Nenhuma frase encontrada para hoje
- `500` - Erro interno

**Exemplo Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "question": "How are you?",
      "correct_answer": "I'm fine, thank you.",
      "explanation": "..."
    }
  ],
  "date": "2026-01-09",
  "createdAt": "2026-01-09T12:00:00.000Z",
  "timestamp": "2026-01-09T14:30:00.000Z"
}
```

**Exemplo Response (404):**
```json
{
  "success": false,
  "message": "No sentences found for today",
  "date": "2026-01-09",
  "timestamp": "2026-01-09T14:30:00.000Z"
}
```

### 2. generateDailySentences
**Status:** 🚧 Estrutura criada, aguardando implementação GenAI

**Trigger:** EventBridge Scheduler (diário, 00:00 UTC)

**Função:** Gera 20 novas frases usando GenAI e salva no DynamoDB

**Próximos passos:**
- Integrar com GenAI (OpenAI/Anthropic)
- Usar `saveDailySentences()` do repositório

## 📚 Libraries

### libs/dynamodb.js
Cliente DynamoDB configurado com AWS SDK v3.

**Exports:**
- `default` - DynamoDBDocumentClient instance

**Features:**
- Usa Document Client para operações simplificadas
- Marshalling/unmarshalling automático
- Remove valores undefined
- Região configurável via `AWS_REGION`

### libs/dailySentencesRepository.js
Repositório para operações CRUD de frases diárias.

**Exports:**

#### `saveDailySentences({ date, sentences })`
Salva 20 frases no DynamoDB.

**Params:**
- `date` (string): Data no formato YYYY-MM-DD (PK)
- `sentences` (array): Array de objetos com frases

**Returns:** `{ success, date, count }`

**Features:**
- Usa `ConditionExpression` para não sobrescrever
- Adiciona `createdAt` e `updatedAt` automaticamente
- Throw error se data já existe

#### `getDailySentencesByDate(date)`
Busca frases por data.

**Params:**
- `date` (string): Data no formato YYYY-MM-DD

**Returns:** Objeto com frases ou `null` se não encontrado

#### `getCurrentDate()`
Retorna data atual em formato YYYY-MM-DD (UTC).

**Returns:** string (YYYY-MM-DD)

## 🔐 Variáveis de Ambiente

```bash
AWS_REGION=us-east-1
DAILY_SENTENCES_TABLE=DailySentences
GENAI_API_KEY=your_api_key_here
GENAI_MODEL=gpt-4.1-mini
```

## 📦 Dependências

```json
{
  "@aws-sdk/client-dynamodb": "^3.965.0",
  "@aws-sdk/lib-dynamodb": "^3.965.0",
  "axios": "^1.7.9"
}
```

## 🧪 Testes de Compilação

```bash
# Testar lambda getDailySentences
node --input-type=module -e "import { handler } from './lambdas/getDailySentences/index.js'; console.log('✅', typeof handler)"

# Testar cliente DynamoDB
node --input-type=module -e "import docClient from './libs/dynamodb.js'; console.log('✅', typeof docClient)"

# Testar repositório
node --input-type=module -e "import { getDailySentencesByDate } from './libs/dailySentencesRepository.js'; console.log('✅', typeof getDailySentencesByDate)"
```

## 🚀 Deploy

O deploy será feito via:
- Terraform/CDK (infraestrutura)
- GitHub Actions (CI/CD)

## 📝 DynamoDB Schema

### Table: DailySentences

**Primary Key:**
- `date` (String) - YYYY-MM-DD format

**Attributes:**
- `date` (String) - Partition Key
- `sentences` (List) - Array of sentence objects
- `createdAt` (String) - ISO timestamp
- `updatedAt` (String) - ISO timestamp

**Sentence Object Structure:**
```json
{
  "id": 1,
  "question": "How are you?",
  "correct_answer": "I'm fine, thank you.",
  "explanation": "Common greeting response",
  "difficulty": "beginner",
  "category": "greetings"
}
```

## ✅ Status ETAPA 2

- [x] AWS SDK v3 instalado
- [x] Cliente DynamoDB criado
- [x] Repositório com funções CRUD
- [x] Lambda getDailySentences integrada
- [x] Código compila sem erros
- [x] Estrutura limpa e organizada
- [ ] Lambda generateDailySentences (aguardando GenAI)
- [ ] Infraestrutura AWS (próxima etapa)
- [ ] CI/CD (próxima etapa)

## 🔄 Próximas Etapas

1. **ETAPA 3:** Implementar GenAI na lambda generateDailySentences
2. **ETAPA 4:** Criar infraestrutura AWS (Terraform/CDK)
3. **ETAPA 5:** Setup CI/CD com GitHub Actions
4. **ETAPA 6:** Conectar frontend ao backend serverless
