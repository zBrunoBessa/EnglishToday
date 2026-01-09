# Changelog - EnglishToday

## [1.4.0] - 2026-01-09

### ✨ ETAPA 5 - CI/CD com GitHub Actions

#### 📦 Arquivos Criados

- ✅ `.github/workflows/terraform.yml` - Terraform CI/CD
- ✅ `.github/workflows/backend.yml` - Lambda deployment
- ✅ `.github/AWS_OIDC_SETUP.md` - OIDC setup guide
- ✅ `.github/CI_CD_GUIDE.md` - Complete CI/CD documentation
- ✅ `.github/ETAPA5_CICD.md` - ETAPA 5 summary

#### 🔐 AWS OIDC Authentication

- ✅ No static AWS credentials
- ✅ Temporary credentials via OIDC
- ✅ Scoped to specific repository
- ✅ Automatic credential rotation
- ✅ Trust policy with conditions
- ✅ Least privilege permissions

#### 🔄 Terraform Workflow

**Triggers:**

- ✅ Push to main/develop (only infra/\*\*)
- ✅ Pull requests

**Features:**

- ✅ `terraform fmt -check`
- ✅ `terraform init` with S3 backend
- ✅ `terraform validate`
- ✅ `terraform plan` (always)
- ✅ Comment plan on PR
- ✅ `terraform apply` (only on push to main)
- ✅ Multi-environment (prod/dev)
- ✅ GitHub step summary

#### 🚀 Backend Workflow

**Triggers:**

- ✅ Push to main/develop (only backend/\*\*)
- ✅ Pull requests

**Jobs:**

**Test Job:**

- ✅ Setup Node.js 20
- ✅ Install dependencies
- ✅ Run linter
- ✅ Run tests
- ✅ Validate imports

**Deploy Job:**

- ✅ Install production dependencies
- ✅ Package Lambdas (zip)
- ✅ Update Lambda code via AWS CLI
- ✅ Wait for update completion
- ✅ Test Lambda invocation
- ✅ Multi-environment (prod/dev)

#### 🌳 Branch Strategy

- ✅ `main` → prod environment
- ✅ `develop` → dev environment
- ✅ Feature branches → validation only
- ✅ PR required for main
- ✅ Status checks required

#### 🔒 Secrets Required

- ✅ `AWS_ROLE_ARN` - IAM role for OIDC
- ✅ `TF_STATE_BUCKET` - Terraform state bucket
- ✅ `TF_STATE_LOCK_TABLE` - DynamoDB lock table
- ✅ `GENAI_API_KEY` - GenAI API key
- ✅ `GENAI_MODEL` - GenAI model name

#### 📝 Features

- ✅ Automated infrastructure deployment
- ✅ Automated Lambda deployment
- ✅ PR comments with Terraform plan
- ✅ GitHub step summaries
- ✅ Error handling and retries
- ✅ Post-deployment testing
- ✅ CloudWatch logs integration
- ✅ Deployment history tracking

#### 📚 Documentation

- ✅ AWS OIDC setup guide (complete)
- ✅ CI/CD workflow guide (complete)
- ✅ Troubleshooting section
- ✅ Branch strategy explained
- ✅ Security best practices
- ✅ README updated with CI/CD info

#### ✅ Benefits

- ✅ Deploy in minutes, not hours
- ✅ Consistent deployments
- ✅ No manual steps
- ✅ Environment parity
- ✅ Rollback via git
- ✅ Full audit trail

---

## [1.3.0] - 2026-01-09

### ✨ ETAPA 4 - Infrastructure as Code (Terraform)

#### 📦 Arquivos Criados

- ✅ `infra/provider.tf` - Terraform & AWS provider
- ✅ `infra/variables.tf` - Input variables (10 vars)
- ✅ `infra/outputs.tf` - Output values (10 outputs)
- ✅ `infra/dynamodb.tf` - DynamoDB table
- ✅ `infra/iam.tf` - IAM roles (least privilege)
- ✅ `infra/lambda_generate.tf` - Generate Lambda
- ✅ `infra/lambda_get.tf` - Get Lambda
- ✅ `infra/api_gateway.tf` - HTTP API Gateway
- ✅ `infra/eventbridge.tf` - Cron scheduler
- ✅ `infra/terraform.tfvars.example` - Variables template
- ✅ `infra/.gitignore` - Terraform ignore rules
- ✅ `infra/README.md` - Complete documentation
- ✅ `infra/ETAPA4_TERRAFORM.md` - Detailed guide

#### 🏗️ Infrastructure Components

**DynamoDB:**

- ✅ Table: {project}-daily-sentences-{env}
- ✅ Partition key: date (String)
- ✅ Billing: PAY_PER_REQUEST (on-demand)
- ✅ Point-in-time recovery enabled
- ✅ Server-side encryption enabled

**IAM Roles:**

- ✅ Generate Lambda: PutItem + GetItem + Logs
- ✅ Get Lambda: GetItem + Logs (read-only)
- ✅ Least privilege principle
- ✅ Separate roles per function

**Lambda Generate:**

- ✅ Runtime: nodejs20.x
- ✅ Timeout: 30s (configurable)
- ✅ Memory: 256MB (configurable)
- ✅ Auto-package backend code (zip)
- ✅ Environment variables (7 vars)
- ✅ CloudWatch Logs (14 days)

**Lambda Get:**

- ✅ Runtime: nodejs20.x
- ✅ Timeout: 10s
- ✅ Memory: 128MB
- ✅ Auto-package backend code (zip)
- ✅ Environment variables (3 vars)
- ✅ CloudWatch Logs (7 days)

**API Gateway:**

- ✅ HTTP API (v2)
- ✅ Route: GET /daily
- ✅ CORS enabled (all origins)
- ✅ Lambda integration (AWS_PROXY)
- ✅ Access logging enabled
- ✅ Auto-deploy stage

**EventBridge:**

- ✅ Cron: cron(0 3 \* _ ? _) (03:00 UTC)
- ✅ Target: Lambda generateDailySentences
- ✅ Lambda permission configured
- ✅ Custom input payload

#### 📝 Variables

- ✅ aws_region (default: us-east-1)
- ✅ project_name (default: englishtoday)
- ✅ environment (default: prod)
- ✅ genai_api_key (sensitive, required)
- ✅ genai_api_url (default: OpenAI)
- ✅ genai_model (default: gpt-4o-mini)
- ✅ genai_prompt (optional)
- ✅ lambda_timeout (default: 30)
- ✅ lambda_memory (default: 256)
- ✅ eventbridge_schedule (configurable)

#### 📤 Outputs

- ✅ api_endpoint_daily (full URL)
- ✅ dynamodb_table_name
- ✅ lambda_generate_function_name
- ✅ lambda_get_function_name
- ✅ eventbridge_schedule
- ✅ deployment_summary (consolidated)

#### 🔐 Security

- ✅ Least privilege IAM roles
- ✅ Sensitive variables protected
- ✅ Encryption at rest (DynamoDB)
- ✅ CloudWatch encryption
- ✅ No wildcard permissions

#### 💰 Cost

- ✅ Monthly estimate: ~$1.04
- ✅ Scales with usage
- ✅ Pay-per-request billing

#### 📚 Documentation

- ✅ Complete README with examples
- ✅ Deployment guide
- ✅ Testing instructions
- ✅ Monitoring setup
- ✅ Troubleshooting guide
- ✅ Cost breakdown

---

## [1.2.0] - 2026-01-09

### ✨ ETAPA 3 - GenAI Integration

#### 📦 Adicionado

- ✅ `backend/libs/genaiClient.js` - Cliente GenAI com axios
- ✅ `backend/libs/validateSentences.js` - Validação de 20 frases
- ✅ Lambda `generateDailySentences` completa e funcional
- ✅ `backend/ETAPA3_GENAI.md` - Documentação completa

#### 🤖 GenAI Client

- ✅ Suporte OpenAI, Azure OpenAI, Anthropic
- ✅ Timeout de 30 segundos
- ✅ Parse automático de respostas
- ✅ Remove markdown e numeração
- ✅ Error handling robusto
- ✅ Prompt padrão otimizado

#### 🔍 Validação de Frases

- ✅ Valida exatamente 20 frases
- ✅ Comprimento entre 3-200 caracteres
- ✅ Apenas caracteres ASCII
- ✅ Formatação automática para DynamoDB
- ✅ Difficulty assignment (beginner/intermediate/advanced)

#### 🚀 Lambda generateDailySentences

- ✅ Orquestra todo o fluxo (GenAI → Validate → Save)
- ✅ Idempotente (não duplica se já existe)
- ✅ Logs estruturados com emojis
- ✅ Error handling completo
- ✅ Response 200/500 apropriados

#### 🔐 Novas Variáveis

- ✅ `GENAI_API_KEY` (required)
- ✅ `GENAI_API_URL` (default: OpenAI)
- ✅ `GENAI_MODEL` (default: gpt-4o-mini)
- ✅ `GENAI_PROMPT` (optional)

#### ✅ Testes

- ✅ Todos os módulos compilam
- ✅ Validação testada com 20 frases
- ✅ Formatação testada e funcionando
- ✅ Lambda handler funcional

#### 💰 Custo Estimado

- ✅ gpt-4o-mini: ~$0.0045/mês
- ✅ Documentação com comparação de modelos

---

## [1.1.0] - 2026-01-09

### ✨ ETAPA 2 - DynamoDB Integration (AWS SDK v3)

#### 📦 Adicionado

- ✅ AWS SDK v3 dependencies (`@aws-sdk/client-dynamodb`, `@aws-sdk/lib-dynamodb`)
- ✅ `backend/libs/dynamodb.js` - DynamoDB Document Client
- ✅ `backend/libs/dailySentencesRepository.js` - Repository com funções CRUD
- ✅ `backend/README.md` - Documentação completa do backend
- ✅ Lambda `getDailySentences` integrada com DynamoDB

#### 🔄 Funções Implementadas

- ✅ `saveDailySentences({ date, sentences })` - Salvar frases com ConditionExpression
- ✅ `getDailySentencesByDate(date)` - Buscar frases por data
- ✅ `getCurrentDate()` - Helper para data atual (YYYY-MM-DD)

#### 📝 Lambda getDailySentences

- ✅ Busca frases do dia atual do DynamoDB
- ✅ Retorna 200 com frases se existir
- ✅ Retorna 404 se não encontrado
- ✅ Retorna 500 em caso de erro
- ✅ CORS headers configurados

#### ✅ Testes de Compilação

- ✅ Lambda getDailySentences compila sem erros
- ✅ DynamoDB client compila sem erros
- ✅ Repository compila sem erros
- ✅ Todas as funções exportadas corretamente

#### 📚 Documentação

- ✅ `ENV_SETUP.md` atualizado com variáveis AWS
- ✅ `backend/README.md` com documentação completa
- ✅ Schema DynamoDB documentado
- ✅ Exemplos de uso e testes

---

## [1.0.0] - 2026-01-09

### 🧹 Refatoração Completa - Transição para Serverless

#### ✨ Adicionado

- ✅ Estrutura serverless com AWS Lambdas
- ✅ Lambda `generateDailySentences` (geração IA)
- ✅ Lambda `getDailySentences` (API pública)
- ✅ `backend/package.json` dedicado
- ✅ `ENV_SETUP.md` para configuração
- ✅ `STRUCTURE.md` documentando arquitetura
- ✅ Estrutura de pastas para IaC (`infra/`, `scripts/`, `.github/workflows/`)

#### 🗑️ Removido - Backend Express/SQLite

- ❌ `backend/server.js` (Express server)
- ❌ `backend/routes/phrases.js` (rotas Express)
- ❌ `backend/db/database.js` (SQLite config)
- ❌ `backend/db/seed.js` (seed local)
- ❌ `backend/db/englishtoday.db` (banco local)
- ❌ Pastas vazias `backend/db/` e `backend/routes/`

#### 🗑️ Removido - Frontend

- ❌ `src/pages/LevelA1.jsx` (página não utilizada)
- ❌ `src/pages/LevelA1.css` (CSS não utilizado)

#### 🗑️ Removido - Documentação Obsoleta

- ❌ `QUICK_START.md` (específico para Express)

#### 📦 Dependências Limpas

**Removidas:**

- ❌ `express` - Substituído por AWS Lambda
- ❌ `better-sqlite3` - Substituído por DynamoDB
- ❌ `cors` - Gerenciado no API Gateway
- ❌ `nodemon` - Não necessário em serverless
- ❌ `concurrently` - Frontend e backend separados
- ❌ `dotenv` (frontend) - Vite usa VITE\_ prefix

**Mantidas:**

- ✅ `react` 18.2.0
- ✅ `react-dom` 18.2.0
- ✅ `react-router-dom` 6.30.3
- ✅ `vite` 5.0.8

#### 🔄 Atualizado

- ✅ `package.json` renomeado para `englishtoday-frontend`
- ✅ Scripts simplificados (dev, build, preview)
- ✅ `README.md` com arquitetura serverless
- ✅ Versão atualizada para 1.0.0

#### 📊 Redução de Tamanho

- **Antes:** 235 packages (frontend + backend Express)
- **Depois:** 71 packages frontend + 24 packages backend
- **Redução:** ~70% menos dependências

#### ✅ Páginas Ativas

1. **Home** - Landing page
2. **Day Phrases** - 20 frases diárias
3. **English Guide** - Guia completo
4. **Test English Level** - Avaliação

#### 🚀 Status

- ✅ Frontend limpo e funcional (porta 5176)
- ✅ Lambdas criadas e testadas
- ✅ Estrutura pronta para deploy AWS
- 🚧 Aguardando implementação de DynamoDB
- 🚧 Aguardando integração GenAI

---

## Notas de Migração

### Para desenvolvedores:

1. Backend agora é serverless (não rode `npm start` antigo)
2. Frontend: `npm run dev` (porta 5176 atualmente)
3. Backend: Lambdas em `backend/lambdas/`
4. Sem banco local - DynamoDB será usado
5. Configurações em `.env` (ver `ENV_SETUP.md`)

### Próximos passos:

1. Implementar lógica GenAI nas Lambdas
2. Configurar DynamoDB
3. Deploy infraestrutura AWS
4. Setup CI/CD
5. Conectar frontend ao backend serverless
