const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
            const { user_id } = req.headers;
            const { spot_id } = req.params; // estudar req.params
            const { date } = req.body;

            //approved fica para depois


            const booking  = await Booking.create({  //estudar esse create e atributos
                
                user : user_id, // individual whom requested the reservation
                spot: spot_id,  // user related to this id created the spot 
                date, 

            })

            await booking.populate('user').populate('spot').execPopulate(); //da todas asminhas informaçoes sobre 
        
            const ownerSocket = req.connectedUsers[booking.spot.user];

             if (ownerSocket) {
                 req.io.to(ownerSocket).emit('booking_request', booking);
             }



            return res.json(booking);
    }

} 