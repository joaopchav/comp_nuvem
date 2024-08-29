const knex = require('knex');
const config = require('./knexfile').development;

const db = knex(config);

// Criação da tabela clientes se não existir
db.schema.hasTable('clientes').then(exists => {
  if (!exists) {
    return db.schema.createTable('clientes', table => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('cpf').notNullable().unique();
      table.date('dataNascimento').notNullable();
      table.string('email').notNullable();
    });
  }
});

module.exports = db;
