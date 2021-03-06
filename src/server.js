const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', course=>{
        socket.join(course);
    });
});

mongoose.connect('mongodb+srv://cantarelli:12345@cluster0-uwah0.mongodb.net/cursebdois?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next)=>{
    req.io = io;
    return next();
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);

//server.listen(3333);