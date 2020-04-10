import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import style from '../../assets/jss/views/auth';
import Login from '../../components/login/Login';

const styles = makeStyles(style);

export default () => {
  const classes = styles();
  return (
    <Grid
      className={classes.container}
      container
      justify="center"
      alignItems="center"
    >
      <Login />
    </Grid>
  );
};
