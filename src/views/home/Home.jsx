import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { details } from '../../redux/modules/auth/actions';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Home = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(details()); }, [dispatch]);
  return (
    <div>
      <Sidebar />
      <div style={{ width: 'calc(100% - 150px)', float: 'right' }}>
        <Navbar />
        <div style={{ marginTop: '65px', padding: '16px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Home;
