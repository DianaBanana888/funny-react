import React from 'react';
import {
  Link
} from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <>
      {/* <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="/home">Make a meme</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">Contact us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="login">Log in</Nav.Link>
        </Nav.Item>
      </Nav> */}



      <Link to="/"><button type="button" className="navbar-button">Home</button></Link>
      <Link to="/contact"><button type="button" className="navbar-button">Contact us</button></Link>
      <Link to="/login"><button type="button" className="navbar-button">Login</button></Link>

    </>
  )
}
