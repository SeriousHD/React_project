const express = require('express');
let data = require("./data.json")
const app = express();

app.get('/api/data', (req, res) => {
  data.color = "blue"
  res.json(data)
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);