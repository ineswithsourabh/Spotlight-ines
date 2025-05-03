const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors()); // Allow access from browser

// Root route
app.get('/', (req, res) => {
  res.send('IneswithSourabh Your API is running! Use /api/spotlight to get data.');
});

// Route: GET /api/movies
app.get('/api/spotlight', (req, res) => {
  fs.readFile('./spotlight.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.json(JSON.parse(data));
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Spotlight API running on port ${port}`);
});
