const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
io.on('connection',(socket)=>{
console.log('new user connected');
socket.on('disconnect',()=>{
console.log('cleint disconnected');
})
})




app.use(express.static(publicPath));
const port = process.env.PORT || 8080;


server.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
