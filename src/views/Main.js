import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './views.css';
import Auth from '../Auth';
import Header from '../components/Header';
const auth = new Auth();

export default class Main extends Component {
  componentDidMount() {
    this.props.setName();
  }

  render() {
    return (
      <div>
        <Header name={this.props.name} />
        <div className="Views">
          {this.secretLink()}
          {!auth.isAuthenticated() && this.loginButton()}
        </div>
      </div>
    );
  }

  loginButton() {
    return (
      <div className="Login-Button">
        <div>Please login first.</div>
        <button onClick={auth.login}>Login</button>
      </div>
    );
  }

  secretLink() {
    return (
      <p className="Views-intro">
        Hello, {this.props.name}.<br />
        Do you want to see the secret area? <Link to="/secret">Click here</Link>
      </p>
    );
  }
}
