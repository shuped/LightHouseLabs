import React from 'react';
import { connect } from 'react-redux'
import { sendMessage, sendUsernameChange, changeUsername } from './actions/index'


function ChatBarFooter(props) {

  const handleEnterSubmitMessage = event => {
    if (event.key !== 'Enter') {
      return;
    }
    const { username, color } = props
    const content = event.target.value;
    props.sendMessage(content, username, color);
    event.target.value = '';
  };

  const handleEnterChangeUsername = event => {
    if (event.key !== 'Enter') {
      return;
    }
    const usernameOld = props.username;
    const usernameNew = event.target.value;
    props.changeUsername(usernameNew)
    props.sendUsernameChange(usernameOld, usernameNew);
    event.target.value = '';
  };

  return (
    <footer className="chatbar">
      <input
        name="username"
        
        onKeyPress={handleEnterChangeUsername}
        className="chatbar-username"
        placeholder={props.username}
      />
      <input
        name="content"
        onKeyPress={handleEnterSubmitMessage}
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
      />
    </footer>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (message, username, color) => dispatch(sendMessage(message, username, color)),
    sendUsernameChange: (usernameOld, usernameNew) => dispatch(sendUsernameChange(usernameOld, usernameNew)),
    changeUsername: (username) => dispatch(changeUsername(username))
  };
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    color: state.user.color
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBarFooter);