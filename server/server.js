const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up!');
});
