import React from 'react';

const md = require('markdown-it')({
  html: false,
  linkify: true,
  typographer: true
});

function MessageContent(props) {
  const messageMarkDown = md.render(props.content)
  return (
    <span 
      className="message-content"
      dangerouslySetInnerHTML={{__html: messageMarkDown}}>
    </span>
  );
}

export default MessageContent