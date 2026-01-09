# EnglishToday 🇬🇧

Uma aplicação moderna para aprendizado de inglês com frases diárias.

## 📋 Descrição

EnglishToday é uma plataforma de aprendizado de inglês que oferece 20 frases diárias para prática. O projeto utiliza uma arquitetura simples com frontend React e backend Express + SQLite.

## 🏗️ Arquitetura

### Frontend
- React 18 com Vite
- React Router para navegação
- Design responsivo com tema claro/escuro
- PWA-ready para uso offline

### Backend
- **Express.js**: Servidor Node.js
- **SQLite**: Banco de dados local
- **Better-SQLite3**: Driver rápido para SQLite
- **CORS**: Configurado para desenvolvimento

### Deploy
- **EC2**: Instância AWS
- **PM2**: Gerenciamento de processos
- **Nginx**: Proxy reverso e servidor estático

## 📁 Estrutura do Projeto

```
englishtoday/
├── frontend/              # Aplicação React (Vite)
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── context/      # Context API
│   │   └── ...
│   └── package.json
│
├── backend/              # Servidor Express
│   ├── database/         # Configuração SQLite
│   ├── routes/           # Rotas da API
│   ├── data/            # Banco SQLite
│   ├── server.js        # Servidor principal
│   └── seed.js          # Popular banco com dados
│
├── deploy.sh            # Script de deploy EC2
└── ecosystem.config.js  # Configuração PM2
```

## 🚀 Funcionalidades

### ✨ Implementadas

- ✅ 20 frases diárias de prática
- ✅ Sistema de verificação de respostas
- ✅ Tracking de progresso com persistência
- ✅ Guia completo de aprendizado de inglês
- ✅ Teste de nível de inglês
- ✅ Tema claro/escuro
- ✅ Modal de conclusão e gamificação
- ✅ Backend Express com SQLite
- ✅ API REST para frases
- ✅ Script de deploy para EC2

## 🛠️ Tecnologias

### Frontend
- React 18
- React Router DOM
- Vite
- CSS Modules

### Backend
- Node.js (ES Modules)
- Express.js
- SQLite + Better-SQLite3
- CORS

### Deploy
- PM2 (Process Manager)
- Nginx (Reverse Proxy)
- EC2 (AWS)

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Setup

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd englishtoday
```

2. **Instale dependências do backend**
```bash
cd backend
npm install
```

3. **Popular banco com dados de exemplo**
```bash
npm run seed
```

4. **Instale dependências do frontend**
```bash
cd ..
npm install
```

5. **Execute localmente**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
npm run dev
```

## 🚀 Deploy na EC2

### Pré-requisitos
- Instância EC2 Ubuntu
- Acesso SSH à instância
- Repositório Git configurado

### Deploy Automático

1. **Faça upload do script**
```bash
scp deploy.sh ubuntu@YOUR_EC2_IP:~/
```

2. **Execute o deploy**
```bash
ssh ubuntu@YOUR_EC2_IP
chmod +x deploy.sh
./deploy.sh
```

3. **Acesse a aplicação**
- Frontend: `http://YOUR_EC2_IP`
- API: `http://YOUR_EC2_IP/api/health`

### Gerenciamento
```bash
# Status dos processos
pm2 status

# Logs do backend
pm2 logs englishtoday-backend

# Reiniciar backend
pm2 restart englishtoday-backend

# Status do Nginx
sudo systemctl status nginx
```

## 📊 API Endpoints

### GET /api/health
- **Descrição**: Verifica status do servidor
- **Resposta**: `{ "status": "OK", "timestamp": "..." }`

### GET /api/phrases/daily
- **Descrição**: Retorna frases do dia atual
- **Resposta**: `{ "phrases": [...] }`

### POST /api/phrases/daily
- **Descrição**: Adiciona frases para uma data
- **Body**: `{ "phrases": [...], "date": "YYYY-MM-DD" }`
- **Resposta**: `{ "success": true, "message": "..." }`

## 📊 Custo Estimado (EC2)

Com instância t3.micro:
- EC2 t3.micro: ~$8.50/mês
- Armazenamento EBS: ~$1/mês
- Transferência de dados: ~$1/mês
- **Total estimado: ~$10.50/mês**

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📝 Roadmap

- [x] Fase 1: Estrutura frontend completa
- [x] Fase 2: Backend Express + SQLite
- [x] Fase 3: API REST funcional
- [x] Fase 4: Script de deploy EC2
- [ ] Fase 5: Autenticação de usuários
- [ ] Fase 6: Analytics e dashboard
- [ ] Fase 7: Geração de frases com IA

---

**Status**: 🔄 Pronto para deploy na EC2
