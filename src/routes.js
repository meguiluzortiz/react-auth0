import React, { Component } from 'react';
import Main from './views/Main';
import Secret from './views/Secret';
import Callback from './views/Callback';
import NotFound from './views/NotFound';
import { Route, Switch } from 'react-router-dom';
import Auth from './Auth';
const auth = new Auth();

class Routes extends Component {
  state = {
    name: '',
  };
  setName = () => {
    const newName = auth.getProfile().given_name || 'Visitor';
    this.setState({ name: newName });
  };

  mainComponent = () => <Main name={this.state.name} setName={this.setName} />;
  secretComponent = () => <Secret name={this.state.name} setName={this.setName} />;
  notFoundComponent = () => <NotFound name={this.state.name} />;

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={this.mainComponent} />
          <Route exact path="/secret" render={this.secretComponent} />
          <Route exact path="/callback" component={Callback} />
          <Route render={this.notFoundComponent} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
