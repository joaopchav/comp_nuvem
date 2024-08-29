const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/clientes', async (req, res) => {
  try {
    const cliente = req.body;
    const [id] = await db('clientes').insert(cliente);
    res.status(201).json({ id, ...cliente });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente' });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db('clientes').select('*');
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

app.get('/clientes/:cpf', async (req, res) => {
    try {
      const cliente = await db('clientes').where({ cpf: req.params.cpf }).first();
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
  });
  

app.delete('/clientes/:cpf', async (req, res) => {
  try {
    const rowsAffected = await db('clientes').where({ cpf: req.params.cpf }).del();
    if (rowsAffected) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir cliente' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
