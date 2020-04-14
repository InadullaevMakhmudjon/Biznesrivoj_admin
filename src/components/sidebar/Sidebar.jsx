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

const styles = makeStyles(style);

export default () => {
  const classes = styles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(({ auth }) => auth.user) || {};

  const isActive = (routeName) => (window.location.href.indexOf(routeName) > -1);

  const links = (
    <List>
      {
        elements.map(({ path, name, Icon }) => (
          <NavLink
            key={`${path}${name}`}
            to={path}
            className={classes.item}
          >
            <ListItem
              button
              className={classNames(classes.itemLink, { [classes.active]: isActive(path) })}
            >
              <Icon />
              <ListItemText disableTypography primary={name} className={classes.itemText} />
            </ListItem>
          </NavLink>
        ))
      }
    </List>
  );

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open
    >
      <Paper
        elevation={0}
        style={{
          width: '260px', height: '100vh', padding: '10px',
        }}
      >
        <div style={{
          display: 'flex', height: '120px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '10px',
        }}
        >
          <img
            style={{
              width: '75px', height: '75px', border: '5px solid green', borderRadius: '50%', padding: '1px', borderColor: '#EBEDF2',
            }}
            alt="hello"
            src={user.image}
          />
          <Typography align="center" style={{ color: '#5E5E5E' }} variant="h6">{user.fullName}</Typography>
        </div>
        <Divider />
        {links}
      </Paper>
      <Button
        variant="outlined"
        onClick={() => {
          history.push('/');
          dispatch(logout());
        }}
        style={{ margin: '10px' }}
      >
        Logout
      </Button>
    </Drawer>
  );
};
