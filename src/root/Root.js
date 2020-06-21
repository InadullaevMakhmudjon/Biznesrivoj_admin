import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from '../views/auth/Auth';
import Home from '../views/home/Home';
import Users from '../views/users/Users';

import Articles from '../views/ArticleContainer';
import EditArticle from '../views/EditArticle';

export default () => {
  const token = useSelector(({ auth }) => auth.token);
  if (!token) {
    return <Auth />;
  }
  return (
    <Router>
      <Home>
        <Switch>
          <Route exact path="/articles/:slug" component={EditArticle} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/users" component={Users} />
          <Redirect from="/" to="/articles" />
        </Switch>
      </Home>
    </Router>
  );
};
