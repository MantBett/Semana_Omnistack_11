const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;   //variáveis ambientes

const connection = knex(config);

module.exports = connection;