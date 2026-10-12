// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dark, setDark] = useDarkMode()


    return (
        <nav className="nav" aria-label="Main navigation">
            <div className="nav__logo">
                <Link to="/" aria-label="Bobby's Bargains - Home">
                    {/* <img src="images/logo.jpg" alt="" /> */}
                    Bobby's Bargains
                </Link>
            </div>

            {/* Desktop links */}
            <ul className="desktop__nav__links">
                <li className="desktop__nav__links__item">
                    <Link to="/" aria-label="Home">Home</Link>
                </li>
                <li className="desktop__nav__links__item">
                    <Link to="/about" aria-label="About">About</Link>
                </li>
                <li className="desktop__nav__links__item">
                    <Link to="/contact" aria-label="Contact">Contact</Link>
                </li>
            </ul>

            <button className='theme-toggle'
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => setDark(!dark)}
            >
                {dark ? '🌙' : '☀️'}
            </button>

            {/* Mobile menu section*/}
            <button className="mobile__nav__button" onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile__nav__container"
                aria-label="Toggle mobile navigation">
                ☰
            </button>

            <div className="mobile__nav__container" id="mobile__nav__container" aria-hidden={!menuOpen}>
                <ul className={`mobile__nav__links ${menuOpen ? 'active' : ''}`} role="menu" aria-orientation="vertical">
                    <li className="mobile__nav__links__item" role="none">
                        <Link to="/" aria-label="Home" role="menuitem">Home</Link>
                    </li>
                    <li className="mobile__nav__links__item" role="none">
                        <Link to="/about" aria-label="About" role="menuitem">About</Link>
                    </li>
                    <li className="mobile__nav__links__item" role="none">
                        <Link to="/contact" aria-label="Contact" role="menuitem">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar