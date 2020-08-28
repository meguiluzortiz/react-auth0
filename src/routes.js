import React, { Component } from 'react';
import Main from './views/Main';
import Secret from './views/Secret';
import Callback from './views/Callback';
import NotFound from './views/NotFound';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      name: 'TestName',
    };
  }

  // props are router props.
  // this.props are component props.
  mainComponent = (props) => {
    return <Main {...props} {...this.props} />;
  };

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" render={this.mainComponent} />
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/callback" component={Callback} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
