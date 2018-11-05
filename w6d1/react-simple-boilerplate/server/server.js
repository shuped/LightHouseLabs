// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1')
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// parse an incoming message such that the client can simply add it to state and style it
function parseMessage(stringMessage) {
  /* methods based on message.type
    Dispatch actions to redux store. 
    These actions end up nested within WEBSOCKET actions because
    of the wonky library I had to use and are caught by middleware */
  const message = JSON.parse(stringMessage)
  const parsingMethods = {
    postMessage: ({ content, username, color }) => (
      {
        type: 'ADD_MESSAGE',
        payload: {
          id: Math.random(),
          type: 'incomingMessage',
          content,
          username,
          color
        }
      }
    ),
    postUsernameChange: ({ from, to }) => (
      {
        type: 'ADD_MESSAGE',
        payload: {
          id: uuidv1(),
          type: 'incomingNotification',
          content: `${from} changed their username to ${to}`
        }
      }
    )
  }
  return parsingMethods[message.type](message.payload)
}

function userCountMessage(ws) {
  return {
    type: 'USER_COUNT',
    payload: {
      userCount: ws._socket._server._connections
    }
  }
}
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  wss.broadcast(userCountMessage(ws))
  ws.on('close', () => {
    console.log('Client disconnected');
    wss.broadcast(userCountMessage(ws))
  });
  ws.on('message', (message) => {
    // broadcast an outgoing PARSESD message that can be interpreted by the client for styling
    wss.broadcast(parseMessage(message))
  });
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
