import React from 'react';
import { connect } from 'react-redux';

function Nav(props) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Chatty
      </a>
      <span className="user-count">
        Users: {props.userCount}
      </span>
    </nav>
  );
}
const mapStateToProps = state => {
  return { userCount: state.messages.userCount };
};

export default connect(mapStateToProps)(Nav);