const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://johnpnx:86909196@omni-gpz7n.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

// GET POST PUT PATCH DELETE

//usar formato padrao
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve( __dirname, '..', 'uploads')));
app.use(routes);



app.listen(3333);