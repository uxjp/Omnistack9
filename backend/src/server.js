const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://johnpnx:86909196@omni-gpz7n.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// GET POST PUT PATCH DELETE

//usar formato padrao
app.use(express.json())
app.use(routes);



app.listen(3333);