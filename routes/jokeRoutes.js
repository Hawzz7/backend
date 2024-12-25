import express from 'express';
import db from '../db.js'; // Database connection

const router = express.Router();

// Add joke to favourite
router.post('/favourite', async (req, res) => {
  console.log("body: ",req.body);
  
  const { joke_id, joke_text } = req.body;

  try {
    await db.query(
      'INSERT INTO favourites (joke_id, joke_text) VALUES (?, ?) ON DUPLICATE KEY UPDATE joke_text = VALUES(joke_text)',
      [joke_id, joke_text]
    );
    res.status(200).json({ success: true, message: 'Joke added to favourites' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error saving joke to favourites' });
  }
});

// Retrieve favourite jokes from favourites
router.get('/favourites', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM favourites');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching favourites' });
  }
});

export default router;
