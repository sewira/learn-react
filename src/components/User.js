import React from 'react';
import Logo from '../images/binar.jpg';

const User = () => {
  return (
    <div className="User">
      <div className="logo">
        <img src={Logo} className="logo " alt="logo" />
      </div>
      <div className="info">
        <p>Wijaya, Dian</p>
        <a href="google.com">Log out</a>
      </div>
    </div>
  );
};

export default User;
