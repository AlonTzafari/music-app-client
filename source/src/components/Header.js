import React from 'react'
import '../styles/Header.css'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <header className="appHeader">
            <nav>
               <NavLink to="/">Home</NavLink>
            </nav>
        </header>
    )
}

export default Header
