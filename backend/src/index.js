require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('🚚 Servidor rodando na porta 3333');
});
