const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json()); 
app.use(cors()); // colocar site dentro depois
app.use(routes);

/**
 * Métodos HTTP
 * GET:  Buscar uma informação do back-end /listar
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 * 
*/

/**
 * TIPOS DE PARAMETRO
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" filtros/paginação
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc.
  * 
  */

  /**
   * DRIVER: SELECT * FROM users
   *Query Builder: table('users').select('*').where()
   */



app.listen(3333);