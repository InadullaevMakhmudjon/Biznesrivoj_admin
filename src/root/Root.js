import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "../views/auth/Auth";
import Home from "../views/home/Home";
import Users from "../views/users/Users";

import Articles from "../views/ArticleContainer";
import EditArticle from "../views/EditArticle";
import TGBooks from "../views/TGBooks";
import TGGifts from "../views/TGGifts";
import TGGiftEdit from "../views/TGGiftEdit";
import TGBookEdit from "../views/TGBookEdit";
import TGUsers from "../views/TGUsers";
import TGOrderHistory from "../views/TGOrderHistory.js";
import TGBookCreate from "../views/CreateTGBook";
import TGGiftCreate from '../views/CreateTGGift';

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
          <Route exact path="/telegram-books" component={TGBooks} />
          <Route exact path="/telegram-book-create" component={TGBookCreate} />
          <Route exact path="/telegram-books/:bookId" component={TGBookEdit} />
          <Route exact path="/telegram-gifts" component={TGGifts} />
          <Route exact path="/telegram-gift-create" component={TGGiftCreate} />
          <Route exact path="/telegram-gifts/:giftId" component={TGGiftEdit} />
          <Route exact path="/telegram-users" component={TGUsers} />
          <Route exact path="/telegram-orders" component={TGOrderHistory} />
          <Route exact path="/users" component={Users} />
          <Redirect from="/" to="/articles" />
        </Switch>
      </Home>
    </Router>
  );
};
