
const Spot = require('../Models/Spot');

module.exports = {
    async index(req, res){

        const user_id = req.headers.user_id;

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}