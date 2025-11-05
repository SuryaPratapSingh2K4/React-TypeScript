import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC = () => {
    return (
        <nav className='navbar flex'>
            <h2>MyApp</h2>
            <div className='flex flex-row'>
                <ul>
                <li>
                    <NavLink to='/'> User</NavLink>
                </li>
                <li>
                    <NavLink to='/form'> Form
                    </NavLink>
                </li>
                <li><NavLink to='/loop'>Loop</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
