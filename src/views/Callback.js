import React, { Component } from 'react';
import './views.css';
import { Redirect } from 'react-router-dom';
import Auth from '../Auth';
const auth = new Auth();

export default class Callback extends Component {
  state = {
    redirect: null,
  };
  componentDidMount() {
    auth
      .handleAuthentication()
      .then(() => this.setState({ redirect: '/secret' }))
      .catch((err) => this.setState({ redirect: '/error' }));
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="Views">
        <p className="Views-intro">Loading...</p>
      </div>
    );
  }
}
