import React from 'react'
import './NavbarSearch.css'
import { FaSearch } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const NavbarSearch = () => {
    const [showInputSearch, setShowInputSearch] = useState(true)
    const [showToggle, setShowToggle] = useState(false)

  return (
    <header className={`${showToggle && 'open'}`}>
        <a href='#' className='logo'>Logo</a>
        <div className='group'>
            <ul className='navigation'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='search'>
                <span className='icon' >
                    {
                        showInputSearch 
                            ? <GrClose onClick={() => setShowInputSearch(false)} /> 
                            : <FaSearch onClick={() => setShowInputSearch(true)} />
                    }
                    <GiHamburgerMenu className='menuToggle' onClick={() => setShowToggle(!showToggle)} />
                </span>
            </div>
            {/* <GiHamburgerMenu className='menuToggle' /> */}
        </div>
        <div className={`searchBox ${showInputSearch && 'active'}`}>
            <input type='text' placeholder='Search here ...' />
        </div>
    </header>
  )
}

export default NavbarSearch