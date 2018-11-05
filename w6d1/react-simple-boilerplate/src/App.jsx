import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './Nav.jsx';
import ChatBarFooter from './ChatBarFooter.jsx';
import Main from './Main.jsx';
import { connectToWS, changeColor } from './actions/index'

class App extends Component {

  generateRandomColor = () => {
    // ability to generate any color for text: including white! feature, not a bug.
    const hex = Math.floor( Math.random() * 16581375 )
    return hex.toString(16)
  } 

  componentDidMount() {
    this.props.openSocket()
    this.props.changeColor(this.generateRandomColor())
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
        <ChatBarFooter />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSocket: () => dispatch(connectToWS()),
    changeColor: (color) => dispatch(changeColor(color))
  };
};

export default connect(null, mapDispatchToProps)(App)
