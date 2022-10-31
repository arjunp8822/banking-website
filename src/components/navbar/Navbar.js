import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const updateIsOpen = () => {
      setIsOpen(!isOpen)
  }

  return (
    <nav className='nav'>
        <div className='nav-container'>
            <Link 
                className='nav-logo'
                to='hero'
                spy={true}
                activeClass='active'
                >AP Banking</Link>
            <div className='nav-mobile-icon'>
                <FaBars className='nav-fabars' onClick={updateIsOpen}/>
            </div>
            <div className='nav-menu'>
                <ul className='nav-item'>
                    <li><Link 
                        to='about'
                        className='nav-link'
                        offset={-80}
                        spy={true}
                        activeClass='active'
                        >About</Link></li>
                    <li><Link 
                        to='discover' 
                        className='nav-link'
                        offset={-80}
                        spy={true}
                        activeClass='active'
                        >Discover</Link></li>
                    <li><Link 
                        to='signup' 
                        className='nav-link'
                        offset={-80}
                        spy={true}
                        activeClass='active'
                        >Sign Up</Link></li>
                    <li><Link 
                        to='services' 
                        className='nav-link'
                        offset={-80}
                        spy={true}
                        activeClass='active'
                        >Services</Link></li>
                </ul>
            </div>
            <div className='nav-btn'>
                <a href='https://google.com.au' className='nav-btn-link'>Sign In</a>
            </div>
        </div>

        <div className={isOpen? 'sidebar-container' : 'sidebar-container-active'}>
            <div className='icon'>
                <div className='close-icon' onClick={updateIsOpen}><FaTimes /></div>
            </div>
            <div className='sidebar-wrapper'>
                <ul className='sidebar-menu'>
                    <li><Link to='about' className='sidebar-link' onClick={updateIsOpen} offset={-80}>About</Link></li>
                    <li><Link to='discover' className='sidebar-link' onClick={updateIsOpen} offset={-80}>Discover</Link></li>
                    <li><Link to='services' className='sidebar-link' onClick={updateIsOpen} offset={-80}>Services</Link></li>
                    <li><Link to='signup' className='sidebar-link' onClick={updateIsOpen} offset={-80}>Sign Up</Link></li>
                </ul>
                <div className='sidebar-btn'>
                    <a href='https://google.com.au' className='sidebar-btn-link'>Sign In</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar