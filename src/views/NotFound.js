import React, { Component } from 'react';
import './views.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.name} />
        <div className="Views">
          <p className="Views-intro">Uh oh, not found.</p>
          <br />
          <Link to="/">Go home</Link>
        </div>
      </div>
    );
  }
}
