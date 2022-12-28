import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './Images/HZ Logo 2.png'

import './Navbar.css'
import SocialFollow from './SocialFollow'

const Navbar = () => {
const[click, setClick] = useState(false)

const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>  
              <img src={logo} alt='logo' />
            </a>
            <SocialFollow/>
            <div className='hamburger' onClick={handleClick}>
              {click ? (<FaTimes size={30} />)
              : (<FaBars size={30} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Resume</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Projects</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar