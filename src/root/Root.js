import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Auth from '../views/auth/Auth';
import { logout } from '../redux/modules/auth/actions';


export default () => {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);
  if (!token) {
    return <Auth />;
  }
  return (
    <>
      <h1>You are logged in</h1>
      <button type="button" onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
