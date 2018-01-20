var socket = io();
socket.on("connect", function() {
  console.log("connected to server");
  socket.emit("createMessage", {
    from: "adam",
    text: "hi its adam from the messenger"
  });
  
});
socket.on("newMessage", function(message) {
    console.log(message);
  });
socket.on("disconnect", function() {
  console.log("discconected");
});
