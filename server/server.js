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
  socket.emit("newEmail", {
    from: "Ahmed@gmail.com",
    text: "Hi this is a test E-mail"
  });
  socket.on("createEmail", newEmail => {
    console.log(newEmail);
  });

  socket.on("createMessage", message => {
    console.log(message);
  });

  socket.emit("newMessage", {
    from: "server",
    text: "welcom to our services",
    createAt: 325
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
