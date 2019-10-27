// INDEX, SHOW, UPDATE, STORE, DESTROYS

const User = require('../models/User');

module.exports = {
    async store( req, res) {
        //return res.json({ message : "hello world session controller"});
        const email = req.body.email;
        //const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }


        return res.json(user);
        //tudo funcionando normal pelo jeito era um bug no insomnia
    }

};