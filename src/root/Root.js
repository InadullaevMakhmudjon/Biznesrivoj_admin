import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from '../views/auth/Auth';
import Home from '../views/home/Home';
import Dashboard from '../views/dashboard/Dashboard';
import Articles from '../views/articles/Articles';
import Settings from '../views/settings/Settings';
import Users from '../views/users/Users';
import Article from '../views/articles/Article';

export default () => {
  const token = useSelector(({ auth }) => auth.token);
  if (!token) {
    return <Auth />;
  }
  return (
    <Router>
      <Home>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />

          <Route path="/articles">
            <Articles>
              <Route exact path="/articles/create" component={Article} />
              <Route exact path="/articles/edit/:slug" component={Article} />
            </Articles>
          </Route>
          <Route exact path="/users" component={Users} />

          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Home>
    </Router>
  );
};
