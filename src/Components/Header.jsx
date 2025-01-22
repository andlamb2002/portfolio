import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="sticky">
        Header
        <nav>
            <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header