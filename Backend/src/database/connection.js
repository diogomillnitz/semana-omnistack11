const knex = require('knex');
const configurantion = require('../../knexfile');

const connection = knex(configurantion.development);

module.exports = connection;