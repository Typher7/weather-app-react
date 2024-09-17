import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <footer className="footer__container container">

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/typher07/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-instagram' ></i>
                    </a>

                    <a href="https://www.linkedin.com/in/kwameatuahene/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-linkedin' ></i>
                    </a>

                    <a href="https://github.com/Typher7" className="footer__social-link" target="_blank">
                        <i class='bx bxl-github' ></i>
                    </a>
                </div>
                <span className="footer__copy">Made with &#10084; by Kwame</span>
            </footer>
        </footer>
    )
}

export default Footer