import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MaterialAlert from '@material-ui/lab/Alert';
import axios from '../../api';

const Alert = (props) => <MaterialAlert elevation={6} variant="filled" {...props} />;

export default () => {
  const [open, setOpen] = useState(false);
  const [customError, setError] = useState({});

  const handleClose = () => { setOpen(false); };

  axios.interceptors.response.use(null, (error) => {
    if (error.response) {
      setError({ message: error.response.data.message || error.response.data });
    } else if (error.request) {
      setError({ message: error.request });
    } else {
      setError({ message: error.message });
    }
    setOpen(true);
    return Promise.reject(error);
  });

  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">{customError.message}</Alert>
    </Snackbar>
  );
};
