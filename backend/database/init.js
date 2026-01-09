import db from './db.js';

export function initDatabase() {
  // Create phrases table
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS phrases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        english TEXT NOT NULL,
        portuguese TEXT NOT NULL,
        date TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create index for date queries
    db.run(`
      CREATE INDEX IF NOT EXISTS idx_phrases_date ON phrases(date)
    `);
  });

  console.log('✅ Database initialized');
}