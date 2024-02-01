import React from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="header">
        <h2>Taco's Tacos</h2>
        <h3>Taco & Co. <p>Free</p></h3>
        <h3>Team Visible</h3>
      </div>
      <div className="menu">
        <span>Show Menu</span>
      </div>
    </div>
  )
}

export default Navbar;