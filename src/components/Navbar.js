import React from 'react';
import {
  Link
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';



export default function Navbar() {
  return (
    <>
      <Nav
        justify variant="tabs"
        activeKey="/home"
      >
        <Nav.Item>
          <Link to="/home">Make a meme</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact">Contact us</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login">Log in</Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
