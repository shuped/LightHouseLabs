var socket = new WebSocket('ws://localhost:8080')

socket.addEventListener("open", function(e) {
  socket.send('new connection')
})