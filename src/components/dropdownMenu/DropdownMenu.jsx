import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import './DropdownMenu.css'

const DropdownMenu = () => {
  const [showMenuToggle, setShowMenuToggle] = useState(false)

  return (
    <header className={`header2 ${showMenuToggle && 'active2'}`}>
      <a href='#' className='logo2'>My Logo</a>
      <div className='menuToggle2' onClick={() => setShowMenuToggle(!showMenuToggle)}></div>
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Dropdown <MdArrowDropDown /></a>
            <ul>
              <li><a href='#'>Product 01</a></li>
              <li><a href='#'>Product 02</a></li>
              <li><a href='#'>Product 03<b>+</b></a>
                <ul>
                  <li><a href='#'>HTML</a></li>
                  <li><a href='#'>CSS</a></li>
                  <li><a href='#'>Javascript</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Blog <MdArrowDropDown /></a>
            <ul>
              <li><a href='#'>Post Link 01</a></li>
              <li><a href='#'>Post Link 02</a></li>
              <li><a href='#'>Post Link 03</a></li>
            </ul>
          </li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default DropdownMenu