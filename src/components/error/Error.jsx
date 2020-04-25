import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import MaterialAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { listen, close } from '../../redux/modules/error/actions';

const Alert = (props) => <MaterialAlert elevation={6} variant="filled" {...props} />;

const Error = ({ children }) => {
  const dispatch = useDispatch();
  const open = useSelector(({ error }) => error.open);
  const message = useSelector(({ error }) => error.message);
  const handleClose = () => { dispatch(close()); };

  useEffect(() => {
    dispatch(listen());
  }, []);

  return (
    <>
      { children }
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">{message}</Alert>
      </Snackbar>
    </>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
