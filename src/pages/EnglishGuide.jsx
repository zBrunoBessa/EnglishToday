import React from 'react'
import './EnglishGuide.css'

function EnglishGuide() {
  return (
    <div className="english-guide-page">
      <div className="container">
        <div className="guide-content">
          <h1 className="page-title">English Guide</h1>
          <p className="page-subtitle">
            Um guia prático: entenda como o aprendizado funciona, siga um plano em etapas e use as ferramentas certas.
          </p>

          <section id="sumario" className="info-section">
            <h2 className="section-title">🧭 Sumário (clique para ir direto)</h2>
            <div className="info-card toc-card">
              <p className="toc-intro">
                Aqui está o “mapa” do seu estudo. Leia o resumo e execute as etapas; os tópicos abaixo servem para aprofundar.
              </p>

              <div className="toc-grid">
                <a className="toc-link" href="#como-funciona">
                  <div className="toc-title">Como o aprendizado funciona (resumo)</div>
                  <div className="toc-desc">Core vocabulário + Anki + imersão com suporte (Language Reactor).</div>
                </a>
                <a className="toc-link" href="#etapas">
                  <div className="toc-title">Etapas (plano bem definido)</div>
                  <div className="toc-desc">O que fazer no começo e como evoluir sem se perder.</div>
                </a>
                <a className="toc-link" href="#anki">
                  <div className="toc-title">Anki (repetição espaçada)</div>
                  <div className="toc-desc">Como criar cards e revisar do jeito certo.</div>
                </a>
                <a className="toc-link" href="#vocabulario">
                  <div className="toc-title">Core vocabulário</div>
                  <div className="toc-desc">Prioridade por frequência (100 → 500 → 1000 palavras).</div>
                </a>
                <a className="toc-link" href="#language-reactor">
                  <div className="toc-title">Language Reactor e extensões</div>
                  <div className="toc-desc">Imersão guiada: legendas, repetição e dicionário.</div>
                </a>
                <a className="toc-link" href="#imersao">
                  <div className="toc-title">Horas de imersão</div>
                  <div className="toc-desc">Quanto tempo e como distribuir no dia.</div>
                </a>
                <a className="toc-link" href="#erros-comuns">
                  <div className="toc-title">Erros comuns</div>
                  <div className="toc-desc">O que trava iniciantes e como destravar rápido.</div>
                </a>
                <a className="toc-link" href="#estrategias">
                  <div className="toc-title">Estratégias eficazes</div>
                  <div className="toc-desc">Active recall, spaced repetition, interleaving, output.</div>
                </a>
                <a className="toc-link" href="#recursos">
                  <div className="toc-title">Recursos recomendados</div>
                  <div className="toc-desc">Podcasts, LingQ, HelloTalk/Tandem, YouTube.</div>
                </a>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="info-section">
            <h2 className="section-title">🧠 Como o aprendizado de inglês funciona (resumo completo)</h2>
            <div className="info-card">
              <h3>Se você entender isso, o resto vira detalhe</h3>
              <p>
                Você aprende inglês quando expõe o cérebro ao idioma em contexto, revisa o que tende a esquecer e usa o
                idioma de forma ativa. O “atalho” é focar no que mais aparece: <strong>core vocabulário</strong>.
              </p>

              <div className="highlight-box">
                <h4>O caminho é: entender → lembrar → usar</h4>
                <ul className="info-list">
                  <li><strong>Input (entender):</strong> assistir/ler coisas compreensíveis com repetição.</li>
                  <li><strong>Memória (lembrar):</strong> revisão espaçada (ex: <a href="#anki">Anki</a>) para fixar palavras e padrões.</li>
                  <li><strong>Output (usar):</strong> falar/escrever para transformar conhecimento em habilidade.</li>
                </ul>
              </div>

              <div className="highlight-box">
                <h4>Core vocabulário: o que estudar primeiro</h4>
                <p>
                  As palavras mais frequentes aparecem o tempo todo. Quando você domina as primeiras 500–1000 palavras,
                  sua compreensão sobe muito porque você começa a reconhecer estruturas automaticamente.
                </p>
                <ul className="info-list">
                  <li><strong>Top 100:</strong> base para grande parte do que você vê/ouve no dia a dia.</li>
                  <li><strong>101–500:</strong> destrava conversas simples e entendimento de vídeos fáceis.</li>
                  <li><strong>501–1000:</strong> consolida leitura/escuta e reduz travas.</li>
                </ul>
                <p>
                  Quer aprofundar? Vá em <a href="#vocabulario">Core Vocabulário</a>.
                </p>
              </div>

              <div className="highlight-box">
                <h4>Como o Anki ajuda nisso</h4>
                <p>
                  Você esquece palavras novas rapidamente. O Anki resolve isso: ele te mostra o card no momento certo,
                  para fixar com menos tempo de estudo.
                </p>
                <ul className="info-list">
                  <li><strong>O que colocar:</strong> frases curtas + contexto (não só tradução).</li>
                  <li><strong>De onde tirar:</strong> do que você consumiu (vídeos/textos) — isso cria “memória real”.</li>
                  <li><strong>Quanto:</strong> 10–20 novos cards/dia + revisar diariamente.</li>
                </ul>
                <p>
                  Quer aprofundar? Vá em <a href="#anki">Anki</a>.
                </p>
              </div>

              <div className="highlight-box">
                <h4>Imersão no começo (sem travar): use suporte</h4>
                <p>
                  No início, imersão “pura” pode ser frustrante. O ideal é imersão com suporte: entender o suficiente para aprender.
                </p>
                <ul className="info-list">
                  <li>
                    <strong>Language Reactor:</strong> legendas duplas, pausa, dicionário e repetição de frases para estudar sem se perder.
                    (ver <a href="#language-reactor">Language Reactor</a>)
                  </li>
                  <li><strong>Regra prática:</strong> capture 5–10 frases úteis por sessão e leve para o Anki.</li>
                  <li><strong>Fechamento:</strong> escreva 5 frases usando o vocabulário do dia.</li>
                </ul>
              </div>

              <div className="tip-box">
                <strong>✅ Quick Start (7 dias):</strong> 10 min Anki + 20 min vídeo com suporte (Language Reactor) + 10 min escrever 5 frases.
              </div>
            </div>
          </section>

          <section id="etapas" className="info-section">
            <h2 className="section-title">🪜 Etapas (plano bem definido)</h2>
            <div className="info-card">
              <h3>Faça em etapas. Evita confusão e acelera o progresso.</h3>

              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <div className="step-body">
                    <h4>Base (A1 → A2)</h4>
                    <p>Frases prontas + core vocabulário + hábito diário.</p>
                    <p className="step-meta"><strong>Meta:</strong> 300–500 palavras + 20–40 frases úteis.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>
                  <div className="step-body">
                    <h4>Consolidação (A2 → B1)</h4>
                    <p>Mais input com suporte + cards melhores + output leve.</p>
                    <p className="step-meta"><strong>Meta:</strong> escrever 5–10 linhas/dia e falar 2–3x/semana (mesmo que pouco).</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>
                  <div className="step-body">
                    <h4>Fluidez (B1 → B2)</h4>
                    <p>Aumentar output e reduzir dependência do português.</p>
                    <p className="step-meta"><strong>Meta:</strong> conversação semanal + rotina de correção dos erros mais comuns.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-number">4</div>
                  <div className="step-body">
                    <h4>Refino (B2 → C1+)</h4>
                    <p>Nuance, vocabulário específico e compreensão avançada.</p>
                    <p className="step-meta"><strong>Meta:</strong> textos/vídeos complexos + escrita com feedback.</p>
                  </div>
                </div>
              </div>

              <div className="highlight-box">
                <h4>Rotina mínima (45 min/dia)</h4>
                <ul className="info-list">
                  <li><strong>10 min:</strong> Anki (revisões)</li>
                  <li><strong>20 min:</strong> Input com suporte (vídeo + legenda em inglês + pausar e anotar)</li>
                  <li><strong>15 min:</strong> Output (escrever/falar) usando o vocabulário do dia</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="anki" className="info-section">
            <h2 className="section-title">🔄 Repetição Espaçada com Anki</h2>
            <div className="info-card">
              <h3>O que é Anki?</h3>
              <p>
                Anki é um software de flashcards que usa repetição espaçada para otimizar sua memorização. 
                Ele mostra as palavras que você está esquecendo com mais frequência, maximizando o aprendizado.
              </p>
              
              <div className="highlight-box">
                <h4>Como usar Anki efetivamente:</h4>
                <ul className="info-list">
                  <li><strong>Crie cards diariamente:</strong> Adicione 10-20 novas palavras por dia</li>
                  <li><strong>Revise todos os dias:</strong> O algoritmo funciona melhor com revisões consistentes</li>
                  <li><strong>Use imagens e contexto:</strong> Cards com imagens são 40% mais eficazes</li>
                  <li><strong>Adicione exemplos:</strong> Use frases completas ao invés de apenas traduções</li>
                  <li><strong>Seja honesto:</strong> Marque "Difícil" quando realmente não souber</li>
                </ul>
              </div>

              <div className="tip-box">
                <strong>💡 Dica Pro:</strong> Estudos mostram que 15 minutos diários de Anki podem 
                aumentar seu vocabulário em 1000 palavras em 3 meses. Consistência é a chave!
              </div>
            </div>
          </section>

          <section id="curva" className="info-section">
            <h2 className="section-title">📈 Curva de Aprendizado</h2>
            <div className="info-card">
              <h3>Entendendo o Processo de Aprendizado</h3>
              <p>
                O aprendizado de idiomas segue uma curva específica. Entender isso ajuda a manter 
                a motivação e estabelecer expectativas realistas.
              </p>
              
              <div className="learning-curve">
                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 1: Início Rápido (0-3 meses)</h4>
                    <p>Progresso visível e rápido. Você aprende o básico e sente grande evolução.</p>
                    <div className="progress-indicator">Progresso: 0% → 20%</div>
                  </div>
                </div>
                
                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 2: Platô Intermediário (3-12 meses)</h4>
                    <p>Progresso mais lento. Você entende muito mas ainda comete erros. É normal sentir estagnação.</p>
                    <div className="progress-indicator">Progresso: 20% → 60%</div>
                  </div>
                </div>
                
                <div className="curve-item">
                  <div className="curve-phase">
                    <h4>Fase 3: Fluência (12+ meses)</h4>
                    <p>Melhorias sutis mas consistentes. Você se comunica naturalmente e refinamento contínuo.</p>
                    <div className="progress-indicator">Progresso: 60% → 90%+</div>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>⚠️ Importante:</strong> O platô intermediário é onde a maioria desiste. 
                Continue praticando mesmo quando parecer que não está progredindo - você está!
              </div>
            </div>
          </section>

          <section id="vocabulario" className="info-section">
            <h2 className="section-title">📚 Core Vocabulário</h2>
            <div className="info-card">
              <h3>As Palavras Mais Importantes</h3>
              <p>
                Pesquisas mostram que as 1000 palavras mais frequentes cobrem 80% das conversas do dia a dia. 
                Foque nelas primeiro!
              </p>
              
              <div className="vocab-grid">
                <div className="vocab-category">
                  <h4>Top 100 Palavras (Cobrem 50%)</h4>
                  <p>the, be, to, of, and, a, in, that, have, I, it, for, not, on, with, he, as, you, do, at...</p>
                  <span className="vocab-priority">🔥 Prioridade Máxima</span>
                </div>
                
                <div className="vocab-category">
                  <h4>Palavras 101-500 (Cobrem +25%)</h4>
                  <p>Verbos comuns, adjetivos básicos, preposições, pronomes...</p>
                  <span className="vocab-priority">⭐ Alta Prioridade</span>
                </div>
                
                <div className="vocab-category">
                  <h4>Palavras 501-1000 (Cobrem +5%)</h4>
                  <p>Vocabulário específico de contextos, palavras menos comuns...</p>
                  <span className="vocab-priority">📖 Média Prioridade</span>
                </div>
              </div>

              <div className="highlight-box">
                <h4>Estratégia Recomendada:</h4>
                <ol className="action-list">
                  <li>Domine as top 100 palavras primeiro (1-2 meses)</li>
                  <li>Expanda para 500 palavras (3-4 meses)</li>
                  <li>Complete até 1000 palavras (6-8 meses)</li>
                  <li>Continue aprendendo vocabulário específico conforme necessidade</li>
                </ol>
              </div>
            </div>
          </section>

          <section id="language-reactor" className="info-section">
            <h2 className="section-title">🎬 Language Reactor e Extensões</h2>
            <div className="info-card">
              <h3>Assistir Conteúdo em Inglês com Suporte</h3>
              <p>
                Language Reactor é uma extensão revolucionária que transforma Netflix, YouTube e outras 
                plataformas em ferramentas de aprendizado.
              </p>
              
              <div className="tool-feature">
                <h4>🔧 Language Reactor (Chrome/Edge)</h4>
                <ul className="info-list">
                  <li><strong>Legendas duplas:</strong> Inglês e português simultaneamente</li>
                  <li><strong>Pausa automática:</strong> Pausa quando você clica em palavras desconhecidas</li>
                  <li><strong>Tradução instantânea:</strong> Veja traduções ao passar o mouse</li>
                  <li><strong>Repetição de frases:</strong> Reouça frases difíceis facilmente</li>
                  <li><strong>Salve palavras:</strong> Crie flashcards diretamente do conteúdo</li>
                </ul>
              </div>

              <div className="tools-grid">
                <div className="tool-item">
                  <h4>📺 Language Reactor</h4>
                  <p>Extensão para Netflix, YouTube, Prime Video. Gratuita com versão premium disponível.</p>
                  <span className="tool-tag">Recomendado</span>
                </div>
                
                <div className="tool-item">
                  <h4>📖 Readlang</h4>
                  <p>Traduza palavras em qualquer site. Clique e veja traduções instantâneas.</p>
                </div>
                
                <div className="tool-item">
                  <h4>🎧 Language Learning with Netflix</h4>
                  <p>Similar ao Language Reactor, focado especificamente no Netflix.</p>
                </div>
                
                <div className="tool-item">
                  <h4>📱 Toucan</h4>
                  <p>Transforma palavras em sites para o idioma que você está aprendendo.</p>
                </div>
              </div>

              <div className="tip-box">
                <strong>💡 Como usar:</strong> Comece assistindo com legendas em português, depois mude 
                para inglês, e finalmente tente sem legendas. Use Language Reactor para pausar e estudar 
                palavras novas.
              </div>
            </div>
          </section>

          <section id="imersao" className="info-section">
            <h2 className="section-title">⏰ Horas de Imersão Necessárias</h2>
            <div className="info-card">
              <h3>Quanto Tempo Você Precisa?</h3>
              <p>
                Pesquisas do FSI (Foreign Service Institute) mostram quantas horas são necessárias 
                para alcançar diferentes níveis de proficiência.
              </p>
              
              <div className="hours-grid">
                <div className="hours-card">
                  <div className="hours-level">A1 - Iniciante</div>
                  <div className="hours-number">60-100 horas</div>
                  <p>Compreende frases básicas e pode se apresentar</p>
                </div>
                
                <div className="hours-card">
                  <div className="hours-level">A2 - Básico</div>
                  <div className="hours-number">180-200 horas</div>
                  <p>Consegue conversar sobre tópicos familiares</p>
                </div>
                
                <div className="hours-card">
                  <div className="hours-level">B1 - Intermediário</div>
                  <div className="hours-number">350-400 horas</div>
                  <p>Consegue lidar com situações do dia a dia</p>
                </div>
                
                <div className="hours-card">
                  <div className="hours-level">B2 - Intermediário Superior</div>
                  <div className="hours-number">500-600 horas</div>
                  <p>Consegue entender textos complexos e se expressar fluentemente</p>
                </div>
                
                <div className="hours-card">
                  <div className="hours-level">C1 - Avançado</div>
                  <div className="hours-number">700-800 horas</div>
                  <p>Usa o idioma de forma flexível e eficaz</p>
                </div>
                
                <div className="hours-card">
                  <div className="hours-level">C2 - Fluente</div>
                  <div className="hours-number">1000-1200 horas</div>
                  <p>Domínio completo, próximo a um falante nativo</p>
                </div>
              </div>

              <div className="highlight-box">
                <h4>📊 Cálculo Prático:</h4>
                <ul className="info-list">
                  <li><strong>1 hora/dia:</strong> A1 em 2-3 meses | B1 em 1 ano | C1 em 2 anos</li>
                  <li><strong>2 horas/dia:</strong> A1 em 1 mês | B1 em 6 meses | C1 em 1 ano</li>
                  <li><strong>3 horas/dia:</strong> A1 em 3 semanas | B1 em 4 meses | C1 em 8 meses</li>
                </ul>
              </div>

              <div className="tip-box">
                <strong>💡 Lembre-se:</strong> Qualidade importa mais que quantidade. 30 minutos de 
                estudo focado é melhor que 2 horas distraído. Combine estudo ativo (exercícios) com 
                imersão passiva (vídeos, música).
              </div>
            </div>
          </section>

          <section id="erros-comuns" className="info-section">
            <h2 className="section-title">❌ Erros Comuns e Como Evitá-los</h2>
            <div className="info-card">
              <h3>Armadilhas do Aprendizado</h3>
              
              <div className="error-grid">
                <div className="error-item">
                  <h4>🚫 Tradução Literal</h4>
                  <p><strong>Erro:</strong> "I have 20 years" (tradução direta do português)</p>
                  <p><strong>Correto:</strong> "I am 20 years old" ou "I'm 20"</p>
                  <p><strong>Solução:</strong> Aprenda frases completas, não apenas palavras isoladas</p>
                </div>
                
                <div className="error-item">
                  <h4>🚫 Pronúncia de "TH"</h4>
                  <p><strong>Erro:</strong> Pronunciar "think" como "fink" ou "tink"</p>
                  <p><strong>Correto:</strong> Língua entre os dentes, sopro suave</p>
                  <p><strong>Solução:</strong> Pratique com vídeos de pronúncia e repita em voz alta</p>
                </div>
                
                <div className="error-item">
                  <h4>🚫 Uso de Artigos</h4>
                  <p><strong>Erro:</strong> "I go to the school" (quando não é específico)</p>
                  <p><strong>Correto:</strong> "I go to school" (atividade geral)</p>
                  <p><strong>Solução:</strong> Estude regras de artigos e pratique com exemplos</p>
                </div>
                
                <div className="error-item">
                  <h4>🚫 Present Perfect vs Simple Past</h4>
                  <p><strong>Erro:</strong> "I did it yesterday" quando deveria ser "I have done it"</p>
                  <p><strong>Correto:</strong> Present Perfect para ações com relevância no presente</p>
                  <p><strong>Solução:</strong> Entenda o conceito, não apenas memorize regras</p>
                </div>
                
                <div className="error-item">
                  <h4>🚫 Pronúncia de Vogais</h4>
                  <p><strong>Erro:</strong> "beach" vs "bitch", "sheet" vs "shit"</p>
                  <p><strong>Correto:</strong> Preste atenção no som longo vs curto das vogais</p>
                  <p><strong>Solução:</strong> Use dicionários com áudio e repita várias vezes</p>
                </div>
                
                <div className="error-item">
                  <h4>🚫 False Friends</h4>
                  <p><strong>Erro:</strong> "Actually" não significa "atualmente"</p>
                  <p><strong>Correto:</strong> "Actually" = "na verdade" | "Currently" = "atualmente"</p>
                  <p><strong>Solução:</strong> Crie uma lista de false friends e revise regularmente</p>
                </div>
              </div>
            </div>
          </section>

          <section id="estrategias" className="info-section">
            <h2 className="section-title">🎯 Estratégias de Estudo Eficazes</h2>
            <div className="info-card">
              <h3>Métodos Comprovados</h3>
              
              <div className="strategy-grid">
                <div className="strategy-item">
                  <h4>📝 Active Recall</h4>
                  <p>Tente lembrar antes de olhar a resposta. Teste-se constantemente ao invés de apenas reler.</p>
                  <span className="strategy-tag">Eficácia: 90%</span>
                </div>
                
                <div className="strategy-item">
                  <h4>🔄 Spaced Repetition</h4>
                  <p>Revise material em intervalos crescentes. O cérebro retém melhor com pausas entre estudos.</p>
                  <span className="strategy-tag">Eficácia: 85%</span>
                </div>
                
                <div className="strategy-item">
                  <h4>🎯 Interleaving</h4>
                  <p>Misture diferentes tópicos ao invés de estudar um só por vez. Melhora transferência de conhecimento.</p>
                  <span className="strategy-tag">Eficácia: 80%</span>
                </div>
                
                <div className="strategy-item">
                  <h4>🗣️ Output Practice</h4>
                  <p>Fale e escreva, não apenas leia e ouça. Produzir é mais difícil mas mais eficaz.</p>
                  <span className="strategy-tag">Eficácia: 75%</span>
                </div>
              </div>
            </div>
          </section>

          <section id="recursos" className="info-section">
            <h2 className="section-title">📱 Recursos recomendados</h2>
            <div className="info-card">
              <div className="tools-grid">
                <div className="tool-item">
                  <h4>🔄 Anki</h4>
                  <p>Flashcards com repetição espaçada. Gratuito e open-source. Disponível em todas as plataformas.</p>
                  <span className="tool-tag">Essencial</span>
                </div>
                
                <div className="tool-item">
                  <h4>📚 Language Reactor</h4>
                  <p>Extensão para aprender com Netflix/YouTube. Legendas interativas e traduções.</p>
                  <span className="tool-tag">Recomendado</span>
                </div>
                
                <div className="tool-item">
                  <h4>🎧 Spotify Podcasts</h4>
                  <p>"6 Minute English", "The English We Speak" (BBC). Ouça durante exercícios ou deslocamento.</p>
                </div>
                
                <div className="tool-item">
                  <h4>📖 LingQ</h4>
                  <p>Leia textos em inglês com suporte de tradução. Acompanha seu progresso de vocabulário.</p>
                </div>
                
                <div className="tool-item">
                  <h4>💬 HelloTalk / Tandem</h4>
                  <p>Converse com nativos. Pratique escrita e fala com correções em tempo real.</p>
                </div>
                
                <div className="tool-item">
                  <h4>🎬 YouTube Channels</h4>
                  <p>English with Lucy, Learn English with Emma, EnglishClass101. Conteúdo gratuito de qualidade.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default EnglishGuide
