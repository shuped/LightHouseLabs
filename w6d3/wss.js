const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8080})

wss.on('connection', (ws) => {
  ws.on('message'), (msg) => {
    console.log('recieved', msg)
    client.send('brah')
  }
})