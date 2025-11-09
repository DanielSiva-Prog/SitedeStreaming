// Colocando o Express dentro do meu site para que sirva como servidor
const express = require('express');
const path = require('path');


const app = express();

// Define a pasta "public" como estática (onde está o HTML, CSS e JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal (opcional, pois o Express serve o index.html por padrão)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});