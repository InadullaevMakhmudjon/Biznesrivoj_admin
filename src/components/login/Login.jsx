import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../redux/modules/auth/actions';
import style from '../../assets/jss/components/login';

const styles = makeStyles(style);

export default () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const classes = styles();
  return (
    <Grid container className={classes.container}>
      <Grid container direction="row" alignItems="center" justify="center">
        <WorkIcon fontSize="large" className={classes.workIcon} />
        <Typography variant="h4">Workspace</Typography>
      </Grid>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="subtitle1" align="center" className={classes.typo}>Log in to your portal</Typography>

        <Grid container spacing={2} alignItems="flex-end" justify="center" className={classes.emailText}>
          <Grid item xs={1}>
            <EmailIcon />
          </Grid>
          <Grid item xs={11} className={classes.textField}>
            <TextField onKeyUp={(e) => { if (e.keyCode === 13) { dispatch(login({ phone, password })); } }} onChange={(e) => setPhone(e.target.value)} fullWidth label="Email" />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="flex-end" justify="center" className={classes.passwordText}>
          <Grid item xs={1}>
            <LockIcon />
          </Grid>
          <Grid item xs={11} className={classes.textField}>
            <TextField onKeyUp={(e) => { if (e.keyCode === 13) { dispatch(login({ phone, password })); } }} onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" type="password" />
          </Grid>
        </Grid>

        <Button
          variant="outlined"
          fullWidth
          className={classes.button}
          onClick={() => dispatch(login({ phone, password }))}
        >
          Login
        </Button>
      </Paper>
    </Grid>
  );
};
