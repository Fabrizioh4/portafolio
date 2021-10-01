import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Fabrizio A. Masiero</h1>
                <p>Córdoba Capital</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <p>fabriziomasiero0@gmail.com</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Desing by Fabrizio
                </div>   
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/fabrizio-masiero-405a32204" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/fabrii_masiero/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a> 
                    <Link to="/contact-me">
                        <i class="fas fa-envelope envelope"></i>
                    </Link>
                </div>
            </div>
            
        </footer>
    )
}


export default Footer
