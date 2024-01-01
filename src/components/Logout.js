import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setisLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any logout-related actions
    // For example, clear user credentials or tokens
    // and update the isLoggedIn state to false
    setisLoggedIn(false);

    // Redirect to the home page
    navigate('/');
  }, [setisLoggedIn, navigate]);

  return (
    <div>
      {/* You can add a loading message or any other content here if needed */}
      Logging out...
    </div>
  );
};

export default Logout;
