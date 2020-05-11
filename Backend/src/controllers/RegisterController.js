const connection = require('../database/connection'); // acesso ao banco de dados
const crypto = require('crypto'); // modulo de criptografia ja contido no node.js


module.exports = {

    async index(request,response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request,response){
    const {
        nome, 
        matricula,
        email,
        ramal,
        area,
        funcao,
        hash} = request.body;



    await connection('users').insert( {//o await espera a inserção no banco de dados para depois retornar a função
      nome, 
      matricula,
      email,
      ramal,
      area,
      funcao,
      hash
    })

    return response.status(200).send();
    }

};