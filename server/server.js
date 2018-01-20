const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const generateMessage = require("./utils/message");

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

  socket.emit(
    "newMessage",
    generateMessage("admin", "welcome to our chat app")
  );

  socket.broadcast.emit(
    "newMessage",
    generateMessage("admin", "new user joined")
  );

  socket.on("createMessage", (message, callback) => {
    console.log(message);
    callback('it is fine');
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
