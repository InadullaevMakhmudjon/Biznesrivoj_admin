import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import { NavLink, useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/modules/auth/actions';
import style from '../../assets/jss/components/sidebar';
import elements from '../../utils/sidebar-elements';

import BRLogo from '../../assets/images/logo_small.svg';

const styles = makeStyles(style);

export default () => {
  const classes = styles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(({ auth }) => auth.user) || {};

  const isActive = (routeName) => window.location.href.indexOf(routeName) > -1;

  const links = (
    <List>
      {elements.map(({ path, name, Icon }) => (
        <NavLink key={`${path}${name}`} to={path} className={classes.item}>
          <ListItem button className={classNames(classes.itemLink, { [classes.active]: isActive(path) })}>
            <Icon />
            <ListItemText disableTypography primary={name} className={classes.itemText} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );

  return (
    <Drawer anchor="left" variant="permanent" open>
      <Paper elevation={0} className={classes.paperContainer}>
        <div className={classes.conteiner}>
          <img className={classes.image} alt="User" src={BRLogo} />
          <Typography align="center" className={classes.title} variant="h6">
            {user.fullName}
          </Typography>
        </div>
        <Divider />
        {links}
      </Paper>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {
				  history.push('/');
				  dispatch(logout());
        }}
      >
        Logout
      </Button>
    </Drawer>
  );
};
