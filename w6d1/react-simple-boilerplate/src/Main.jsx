import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content.jsx';


class Main extends Component {

  componentDidUpdate() {
    window.scrollTo(0, window.innerHeight)
  }

  render() {
    const { messages } = this.props;
    // messages and notifications
    const messageList = messages.map(msg => (
      <Content key={msg.id} message={msg} />
    ));

    return (
      <main className="messages">
        <span className="message system">
          <p>
            Chatty uses markdown-it for styling, try it out!  
            <a href="https://markdown-it.github.io" target="_blank"> markdown-it.github.io</a>
          </p>
        </span>
        {messageList}
      </main>
    );
  } 
}

const mapStateToProps = state => {
  return { messages: state.messages.messages};
};

export default connect(mapStateToProps)(Main);