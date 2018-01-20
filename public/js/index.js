var socket = io();
socket.on("connect", function() {
  console.log("connected to server");
});
socket.on("newMessage", function(message) {
  var li = $("<li></li>").text(
    `from: ${message.from} ,message: ${message.text}`
  );
  $("#messages").append(li);
});
socket.on("disconnect", function() {
  console.log("discconected");
});

$("#message-form").on("submit", function(e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: $("[name=message]").val()
    },
    function() {
      console.log("it worked");
    }
  );
});
