import React, { Component } from 'react';
import './views.css';

export default class Main extends Component {
  render() {
    return (
      <div className="Views">
        <p className="Views-intro">
          Hello, {this.props.name}. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
