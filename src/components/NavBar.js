import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink to="/feed/explore" >Explore</NavLink>
        <NavLink to="/feed/profile" >Profile</NavLink>
    </div>
  )
}

export default NavBar