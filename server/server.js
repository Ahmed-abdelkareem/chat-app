const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const publicPath = path.join(__dirname, "../public");
const app = express();
server = http.createServer(app);
const io = socketIO(server);
///////////////////////////////////////
app.use(express.static(publicPath));
const port = process.env.PORT || 8080;
//////////////////////////////////////
io.on("connection", socket => {
  console.log("User connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.emit("newMessage", {
    from: "admin",
    text: "welcome to the chat app",
    createAt: new Date().getTime()
  });

  socket.broadcast.emit("newMessage", {
    from: "admin",
    text: "new user joined",
    createAt: new Date().getTime()
  });

  socket.on("createMessage", message => {
    console.log(message);
    io.emit("newMessage", {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });

    /* socket.broadcast.emit("newMessage", {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });*/
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
