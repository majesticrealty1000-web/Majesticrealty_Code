import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src="/Data/Majestic Realty Circle logo.png" alt="Majestic Realty" style={{ height: '60px', width: '60px', objectFit: 'contain', marginRight: '12px' }} />
                    <span className="logo-text">
                        <span className="text-gold">MAJESTIC</span> <span style={{ color: '#fff' }}>REALTY</span>
                    </span>
                </Link>
                <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/expertise" onClick={() => setIsOpen(false)}>Expertise</NavLink></li>
                    <li><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
                    <li><NavLink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
