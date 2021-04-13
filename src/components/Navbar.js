import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">

      <Link to="/"><button type="button" className="navbar-button">Home</button></Link>
      <Link to="/first"><button type="button" className="navbar-button">First</button></Link>
      <Link to="/second"><button type="button" className="navbar-button">Second</button></Link>

    </div>
  )
}
