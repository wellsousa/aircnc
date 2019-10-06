
const Booking = require('../Models/Booking');

module.exports = {
    
    async store(req, res){
        const user_id = req.headers.user_id;
        const spot_id = req.params.spot_id;
        const date = req.body.date;

        const booking = await Booking.create({
           user: user_id,
           spot: spot_id,
           date, 
        });

        /*
            O Mongo busca automaticamente todas as informações referente um objeto no banco
            para criar um novo objeto com esses dados. Isso cria, de certa forma, uma redundancia de dados.
        */
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};