import React, { Component } from 'react';
import './header.css';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Welcome to React, {this.props.name}</h1>
      </header>
    );
  }
}
