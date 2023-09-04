import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ivy Wallet</h1>
                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                </ul> */}

                <div className="footer__social">
                    {/* <a
                        href="https://www.instagram.com/me_adx/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="uil uil-instagram"></i>
                    </a> */}

                    <a
                        href="https://t.me/+ETavgioAvWg4NThk"
                        className="footer__social-link"
                        target="_blank" rel="noreferrer noopener"
                    >
                        <i class="bx bxl-telegram"></i>
                    </a>

                    <a
                        href="https://github.com/ivy-apps/ivy-wallet"
                        className="footer__social-link"
                        target="_blank" rel="noreferrer noopener"
                    >
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Ivy Wallet. All rights reserved

                </span>
            </div>
        </footer>
    );
};

export default Footer;
