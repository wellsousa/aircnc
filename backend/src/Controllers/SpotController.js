
const User = require('../Models/User');
const Spot = require('../Models/Spot');

module.exports = {

    async index(req, res){
        
        const technology = req.query.technologies;

        /*
            Retorna uma lista de todos os objetos que possuam a tecnologia passada
            como parametro.
        */
        const spots = await Spot.find({ technologies: technology });

        return res.json(spots);
    },

    async store(req, res){
        const filename = req.file.filename;
        const company = req.body.company;
        const technologies = req.body.technologies;
        const price = req.body.price;

        const user_id = req.headers.user_id;

        /*
            Retorna um objeto com unico com id igual ao passado como parametro.
        */
        const user = await User.findById(user_id);

        if (! user){
            return res.status(400).json({error: "User does not exists."});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            technologies: technologies.split(',').map(technologies => technologies.trim()),
            price
        });

        return res.json(spot);
    }
}