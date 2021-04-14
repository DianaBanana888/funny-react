import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">

      <Link to="/"><button type="button" className="navbar-button">Home</button></Link>
      <Link to="/contact"><button type="button" className="navbar-button">Contact us</button></Link>
      <Link to="/login"><button type="button" className="navbar-button">Login</button></Link>

    </div>
  )
}
