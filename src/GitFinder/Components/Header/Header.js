import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">GitFinder</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Header
