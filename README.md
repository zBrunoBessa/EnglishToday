# English Learn 🇬🇧

Uma aplicação serverless para aprendizado de inglês com frases diárias geradas automaticamente.

## 📋 Descrição

English Learn é uma plataforma de aprendizado de inglês que oferece 20 frases diárias para prática. O projeto utiliza arquitetura serverless AWS com Amplify, Lambda, DynamoDB e EventBridge.

## 🏗️ Arquitetura Serverless

### Frontend
- React 18 com Vite
- Amplify Hosting (CDN Global)
- Design responsivo com tema claro/escuro
- PWA-ready

### Backend
- **Lambda**: 2 funções serverless
  - `generateDailyPhrases`: Gera 20 frases diárias
  - `getDailyPhrases`: Retorna frases do dia
- **DynamoDB**: Armazenamento NoSQL
- **API Gateway**: REST API pública
- **EventBridge**: Scheduler diário (00:00 UTC)

### Fluxo de Dados
```
EventBridge (00:00 UTC)
    ↓
Lambda: generateDailyPhrases
    ↓
DynamoDB (20 frases/dia)
    ↑
Lambda: getDailyPhrases
    ↑
API Gateway
    ↑
Amplify Frontend
```

## 📁 Estrutura do Projeto

```
englishtoday/
├── src/                   # Frontend React
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── context/          # Context API
│   └── config.js         # Configuração da API
│
├── AWS_MANUAL_SETUP.md   # Guia de deploy manual
├── package.json
└── vite.config.js
```

## 🚀 Funcionalidades

- ✅ 20 frases diárias de prática
- ✅ Sistema de verificação de respostas
- ✅ Tracking de progresso com persistência
- ✅ Guia completo de aprendizado de inglês
- ✅ Teste de nível de inglês
- ✅ Tema claro/escuro
- ✅ Modal de conclusão e gamificação
- ✅ Geração automática diária (EventBridge)
- ✅ API REST serverless
- ✅ Deploy Amplify

## 🛠️ Tecnologias

### Frontend
- React 18
- React Router DOM
- Vite
- CSS Modules

### Backend (Serverless)
- AWS Lambda (Python 3.12)
- DynamoDB
- API Gateway
- EventBridge Scheduler

### Deploy
- AWS Amplify Hosting
- CI/CD automático

## 📦 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Setup

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd englishtoday

# Instale dependências
npm install

# Execute localmente
npm run dev
```

## 🚀 Deploy

### Frontend no Amplify

1. **Build do projeto**
```bash
npm run build
```

2. **Deploy no Amplify Console**
- Acesse: https://console.aws.amazon.com/amplify
- Conecte seu repositório GitHub ou faça upload da pasta `dist/`
- Configure build: `npm run build`
- Output directory: `dist`

3. **Acesse sua aplicação**
- URL: Fornecida pelo Amplify após deploy

## 📊 Arquitetura AWS

### API Gateway
```
URL: https://90f4l1q0jb.execute-api.us-east-2.amazonaws.com
Endpoint: /dailyphrases
Method: GET
Response: { "phrases": [...], "date": "2026-01-09" }
```

### DynamoDB Table: EnglishPhrases
```
Partition Key: date (String)
Sort Key: id (Number)

Attributes:
- english (String)
- portuguese (String)
- createdAt (String)
```

### Lambda Functions
- **generateDailyPhrases**: Gera 20 frases diárias (Python 3.12)
- **getDailyPhrases**: Retorna frases do dia (Python 3.12)

### EventBridge
- **Trigger**: Diariamente às 00:00 UTC
- **Target**: Lambda generateDailyPhrases

## 📊 Custo Estimado (AWS Serverless)

### Free Tier (12 meses)
- Lambda: 1M requests/mês grátis
- DynamoDB: 25 GB storage grátis
- API Gateway: 1M requests/mês grátis
- Amplify: 1000 build minutes grátis

### Após Free Tier (uso real do projeto)
- Lambda: **$0.00**/mês (30 execuções/mês)
- DynamoDB: **$0.25**/mês (600 writes + reads)
- API Gateway: **$0.35**/mês (~1k requests)
- Amplify Hosting: **$0-2**/mês
- EventBridge: **$0.00**/mês (30 triggers)

**Total: ~$0.60-2.60/mês** 🎉

### Comparação com EC2
- EC2 t3.micro: $10.50/mês
- Serverless: $0.60-2.60/mês
- **Economia: 75-95%**

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📝 Roadmap

- [x] Fase 1: Estrutura frontend completa
- [x] Fase 2: Backend serverless (Lambda + DynamoDB)
- [x] Fase 3: API Gateway configurada
- [x] Fase 4: EventBridge scheduler
- [x] Fase 5: Deploy em produção
- [ ] Fase 6: Autenticação de usuários (Cognito)
- [ ] Fase 7: Analytics e dashboard
- [ ] Fase 8: Geração de frases com IA

---

**Status**: ✅ Em produção

**API**: https://90f4l1q0jb.execute-api.us-east-2.amazonaws.com/dailyphrases
