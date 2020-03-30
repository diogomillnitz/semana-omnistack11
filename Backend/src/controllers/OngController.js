const connection = require('../database/connection'); // acesso ao banco de dados
const crypto = require('crypto'); // modulo de criptografia ja contido no node.js


module.exports = {

    async index(request,response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request,response){
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert( {//o await espera a inserção no banco de dados para depois retornar a função
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({
        id
    })
    }

};