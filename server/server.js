const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
