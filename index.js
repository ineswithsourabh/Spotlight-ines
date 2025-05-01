const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors()); // Allow access from browser

// Root route
app.get('/', (req, res) => {
  res.send('IneswithSourabh Your API is running! Use /api/movies to get data.');
});

// Route: GET /api/movies
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
  console.log(`Movies API running on port ${port}`);
});
