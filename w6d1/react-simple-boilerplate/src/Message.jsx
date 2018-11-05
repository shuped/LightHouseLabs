import React from 'react';
import Username from './Username.jsx';
import MessageContent from './MessageContent.jsx';


function Message(props) {
  const textColor = {color: '#' + props.color};
  return (
    <div style={textColor} className="message">
      <Username username={props.username} />
      <MessageContent content={props.content} />
    </div>
  );
}

export default Message;