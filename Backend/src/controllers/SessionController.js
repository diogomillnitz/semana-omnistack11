const connection = require('../database/connection'); // acesso ao banco de dados

module.exports = {

    async create(request,response) {
        const {email,senha} = request.body;

        const ong = await connection('ongs')
        .where('email', email)
        .select('email');
        
        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        if(!ong){
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }

}

