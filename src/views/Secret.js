import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../Auth';
import Header from '../components/Header';
const auth = new Auth();

export default class Secret extends Component {
  state = {
    isAuthenticated: true,
    redirect: '/notfound',
  };

  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.setName();
    if (!auth.isAuthenticated()) {
      this.setState({ isAuthenticated: false });
    }
  }

  render() {
    const { isAuthenticated, redirect } = this.state;
    if (!isAuthenticated) {
      return <Redirect to={redirect} />;
    }
    return (
      <div>
        <Header name={this.props.name} />
        <div className="Views">
          <p className="Views-intro">
            This is a super secret area, {this.props.name}. <Link to="/">Jump back to Home</Link>
          </p>
          Or <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }

  logout() {
    auth.logout();
    this.setState({
      isAuthenticated: false,
      redirect: '/',
    });
  }
}
