const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const fs = require('fs');
const port = 3000;

app.get('/buscar-dados', async (req, res) => {
  fs.readFile("dados-desafio.json", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao ler o arquivo JSON.' });
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData)
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
