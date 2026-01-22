import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/images/majestic realty circle logo.png';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <img src={logo} alt="Majestic Realty" style={{ height: '100px', width: '100px', objectFit: 'contain', marginBottom: '1rem' }} />
                    <p>Turning your real estate dreams into reality with premium properties and expert guidance.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>Padale House, near SHREE SHIV CHHATRAPATI SPORTS COMPLEX, opp. ZP School Y Junction, Mahalunge, Pune, Maharashtra 411045</p>
                    <p>+91 84591 37310</p>
                    <p>Majesticrealitypune@gmail.com</p>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Majestic Realty. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
