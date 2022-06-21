import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink to="/feed/explore" >Explore</NavLink>
        <NavLink to="/feed/profile" >Profile</NavLink>
        <Link exact to="/" >Log Out</Link>
    </div>
  )
}

export default NavBar