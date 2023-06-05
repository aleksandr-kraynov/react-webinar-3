import {memo} from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function AuthCheck({isAuth, children}) {   

  if (!isAuth) {
    return <Navigate to='/login' />   
  } else {
    return children
  }  
}

AuthCheck.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default memo(AuthCheck);
