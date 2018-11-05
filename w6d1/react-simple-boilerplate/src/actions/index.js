import {
  WEBSOCKET_SEND,
  WEBSOCKET_CONNECT
} from '@giantmachines/redux-websocket';

export const sendMessage = (content, username, color) => ({
  type: WEBSOCKET_SEND,
  payload: { 
    type: 'postMessage', 
    payload: {
      content,
      username,
      color
    }
  }
});
export const sendUsernameChange = (username0, username1) => ({
  type: WEBSOCKET_SEND,
  payload: {
    type: 'postUsernameChange',
    payload: {
      from: username0,
      to: username1
    }
  }
});
export const changeColor = color => ({
  type: 'CHANGE_COLOR',
  payload: { color }
});
export const changeUsername = username => ({
  type: 'CHANGE_USERNAME',
  payload: { username }
});
export const connectToWS = () => ({
  type: WEBSOCKET_CONNECT,
  payload: { url: 'ws://0.0.0.0:3001' }
});
