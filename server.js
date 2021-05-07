const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('dist/dashboard-vis'));

app.get('/*', (req, res) => {
  res.sendFile('dist/dashboard-vis/index.html');
});

app.listen(PORT, () => {
  console.log('servidor iniciado na porta ' + PORT);
});
