const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');


const app = express();

const server = http.Server(app); //separa o servidor http da minha instacia do express
const io = socketio(server);

const connectedUsers = {};

io.on('connection', socket => {
    console.log(socket.handshake.query);
    console.log('usuario conectado', socket.id)

    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id; 
    /*  
    // setTimeout(() => {
    //     socket.emit('hello', 'world');
        
    // }, 4000); // mensagem partindo do servidor

    socket.on('omni', (data) => {
        console.log(data);
    }) 
  */
    });

// socket nao funciona com o insomnia
// existem ferramnetas para o Browser


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



server.listen(3333);