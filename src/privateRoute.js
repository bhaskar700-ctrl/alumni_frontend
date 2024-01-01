// PrivateRoute.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    // Redirect to login page and store the intended route in state
    navigate('/login', { state: { from: rest.location.pathname } });
    return null;
  }

  return <Element />;
};

export default PrivateRoute;
