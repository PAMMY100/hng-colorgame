import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-section'>
        <nav className='nav'>
            <ul>
                <li><Link to='/start'>Start</Link></li>
                <li><Link to='/instructions'>Instruction</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar