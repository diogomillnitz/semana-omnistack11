const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const RegisterController = require('./controllers/RegisterController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileControler');
const SessionController = require('./controllers/SessionController');
const connection = require('./database/connection');

routes.post('/sessions', SessionController.create);

routes.get('/register', RegisterController.index);//LISTA PARA ACOMPANHAR O QUE FOI INSERIDO NO BANCO
routes.post('/register', RegisterController.create);// Criação de ong

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //exportar variavel de dentro de um arquivo .nodejs
 