import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import style from '../../assets/jss/components/navbar';
import elements from '../../utils/sidebar-elements';

const styles = makeStyles(style);

const isActive = (routeName) => (window.location.href.indexOf(routeName) > -1);

export default () => {
  const [route, setRoute] = useState(elements.find(({ path }) => isActive(path)));
  const classes = styles();
  const history = useHistory();

  history.listen(({ pathname }) => {
    setRoute(elements.find(({ path }) => pathname.includes(path)));
  });

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="textSecondary">{ route ? route.name : '' }</Typography>
      </Toolbar>
    </AppBar>
  );
};
