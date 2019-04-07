import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/general';

class Routes extends Component {
  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { routes } = this.props;
    return (
      <Switch>
        <Redirect exact from="/" to={ROUTES.USERS} />
        {routes
          .filter(route => route.component)
          .map(route => (
            <Route exact path={route.path} key={route.name} component={route.component} />
          ))}
      </Switch>
    );
  }
}

Routes.displayName = 'Routes';
Routes.propTypes = {
  routes: PropTypes.array,
  history: PropTypes.object
};

export default Routes;
