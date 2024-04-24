import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
            <div className="logo">
                <a href="#">Minerva</a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Content</a></li>
                    <li><a href="#">Writes</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        
    </nav>
  )
}

export default Navbar
