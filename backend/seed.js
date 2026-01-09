import { initDatabase } from './database/init.js';
import db from './database/db.js';

// Initialize database
initDatabase();

const samplePhrases = [
  { english: "Good morning! How are you today?", portuguese: "Bom dia! Como você está hoje?" },
  { english: "I love learning new languages.", portuguese: "Eu amo aprender novos idiomas." },
  { english: "The weather is beautiful today.", portuguese: "O tempo está lindo hoje." },
  { english: "Can you help me with this?", portuguese: "Você pode me ajudar com isso?" },
  { english: "I'm excited about this project.", portuguese: "Estou animado com este projeto." },
  { english: "Let's practice English together.", portuguese: "Vamos praticar inglês juntos." },
  { english: "This is a great opportunity.", portuguese: "Esta é uma grande oportunidade." },
  { english: "I need to improve my vocabulary.", portuguese: "Preciso melhorar meu vocabulário." },
  { english: "Reading books helps me learn.", portuguese: "Ler livros me ajuda a aprender." },
  { english: "Practice makes perfect.", portuguese: "A prática leva à perfeição." },
  { english: "I enjoy watching English movies.", portuguese: "Gosto de assistir filmes em inglês." },
  { english: "Speaking is the hardest part.", portuguese: "Falar é a parte mais difícil." },
  { english: "Grammar rules can be confusing.", portuguese: "Regras gramaticais podem ser confusas." },
  { english: "I'm making progress every day.", portuguese: "Estou progredindo todos os dias." },
  { english: "Listening to music helps too.", portuguese: "Ouvir música também ajuda." },
  { english: "I want to travel to England.", portuguese: "Quero viajar para a Inglaterra." },
  { english: "English opens many doors.", portuguese: "O inglês abre muitas portas." },
  { english: "I study for one hour daily.", portuguese: "Estudo por uma hora diariamente." },
  { english: "Mistakes are part of learning.", portuguese: "Erros fazem parte do aprendizado." },
  { english: "Keep going, don't give up!", portuguese: "Continue, não desista!" }
];

const today = new Date().toISOString().split('T')[0];

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO phrases (english, portuguese, date) VALUES (?, ?, ?)');
  
  samplePhrases.forEach((phrase) => {
    stmt.run([phrase.english, phrase.portuguese, today], function(err) {
      if (err) {
        console.error('Error inserting phrase:', err.message);
      }
    });
  });
  
  stmt.finalize(() => {
    console.log(`✅ ${samplePhrases.length} phrases added for ${today}`);
    db.close();
  });
});