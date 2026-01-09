import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// Get daily phrases
router.get('/daily', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  
  db.all('SELECT * FROM phrases WHERE date = ? ORDER BY id', [today], (err, phrases) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (phrases.length === 0) {
      return res.json({ phrases: [], message: 'No phrases for today' });
    }
    
    res.json({ phrases });
  });
});

// Add phrases for a specific date
router.post('/daily', (req, res) => {
  const { phrases, date } = req.body;
  
  if (!phrases || !Array.isArray(phrases)) {
    return res.status(400).json({ error: 'Phrases array is required' });
  }
  
  const targetDate = date || new Date().toISOString().split('T')[0];
  
  const stmt = db.prepare('INSERT INTO phrases (english, portuguese, date) VALUES (?, ?, ?)');
  
  db.serialize(() => {
    db.run('BEGIN TRANSACTION');
    
    let completed = 0;
    let hasError = false;
    
    phrases.forEach((phrase) => {
      stmt.run([phrase.english, phrase.portuguese, targetDate], function(err) {
        if (err && !hasError) {
          hasError = true;
          db.run('ROLLBACK');
          return res.status(500).json({ error: err.message });
        }
        
        completed++;
        if (completed === phrases.length && !hasError) {
          db.run('COMMIT');
          res.json({ 
            success: true, 
            message: `${phrases.length} phrases added for ${targetDate}` 
          });
        }
      });
    });
  });
});

export default router;