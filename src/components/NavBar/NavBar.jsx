import React from 'react'
import './NavBar.css'
import logo from '../../Assets/logo.png'
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
            <img src={logo} alt='logo'/>
            <p>E-registration</p>
        </div>
      <p className='nav-profile'>ADMIN</p>
    </div>
  )
}

export default NavBar