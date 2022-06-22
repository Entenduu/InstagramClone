import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light" >
    
    <Navbar.Brand href="/feed">
    <img src='./images/logo.png' alt='instagram logo'/>
    </Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="/feed/profile" >Profile</Nav.Link>
        <Nav.Link href="/feed/liked" >Liked Photos</Nav.Link>
        <Nav.Link exact href="/" >Log Out</Nav.Link>
    </Nav>
  
  </Navbar>
    </div>
  )
}

export default NavBar

