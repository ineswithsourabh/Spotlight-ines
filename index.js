const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors()); // Allow access from browser

// Route: GET /api/animemovie
app.get('/api/movies', (req, res) => {
  fs.readFile('./movies.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.json(JSON.parse(data));
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Anime API running on port ${port}`);
});
