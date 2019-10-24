const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
            const { user_id } = req.headers;
            const { spot_id } = req.params; // estudar req.params
            const { date } = req.body;

            //approved fica para depois


            const booking  = await Booking.create({  //estudar esse create e atributos
                
                user : user_id,
                spot: spot_id,
                date,

            })

            await booking.populate('user').populate('spot').execPopulate(); //da todas asminhas informaçoes sobre 
            // user e spot
            // estudar isso também

            return res.json(booking);
    }

} 