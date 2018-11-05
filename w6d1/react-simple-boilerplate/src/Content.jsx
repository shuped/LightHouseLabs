import React from 'react';
import Notification from './Notification.jsx';
import Message from './Message.jsx';

function Content(props) {
  const { type, content, username, color } = props.message;

  return (type === 'incomingNotification') 
    ? <Notification content={content} />
    : <Message color={color} content={content} username={username} />;
}
export default Content;