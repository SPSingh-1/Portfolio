import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth <= 600) {
            setMenuOpen(false);
          }
    };

  return (
    <div className='navbar'>
      <nav className='nav'>
          <a className='title' href="/">Portfolio</a>
          <div className='menu'>
            <div 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="cursor-pointer menuBtn"
          >
            {menuOpen 
              ? <IoMdClose className="text-[40px]" />
              : <IoMenu className="text-[40px]" />
            }
          </div>

          {/* Menu Items */}
          <ul className={`menuItems menuItems transition-all duration-300 ease-in-out ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
            <li><a href="#project" onClick={handleLinkClick}>Project</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
