const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
}); 