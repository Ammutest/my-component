import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/services'>Services</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
