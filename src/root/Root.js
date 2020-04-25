import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from '../views/auth/Auth';
import Home from '../views/home/Home';
import routes from '../routes/router';

export default () => {
  const token = useSelector(({ auth }) => auth.token);
  if (!token) {
    return <Auth />;
  }
  return (
    <Router>
      <Home>
        <Switch>
          {
            routes.map(({ path, component }) => (
              <Route key={path} exact path={path} component={component} />
            ))
          }
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Home>
    </Router>
  );
};
