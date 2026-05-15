import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* Footer Content Start */}
                        <div className="footer-content">
                            {/* Footer Logo Start */}
                            <div className="footer-logo">
                                <img src="/images/logo.svg" alt="Footer Logo" />
                            </div>
                            {/* Footer Logo End */}

                            {/* Footer Contact Box Start */}
                            <div className="footer-contact-box">
                                {/* Footer Contact Item Start */}
                                <div className="footer-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-location.svg" alt="Location" />
                                    </div>
                                    <div className="footer-contact-content">
                                        <p>4517 Washington Ave, Kentucky 39495</p>
                                    </div>
                                </div>
                                {/* Footer Contact Item End */}

                                {/* Footer Contact Item Start */}
                                <div className="footer-contact-item">
                                    <div className="icon-box">
                                        <img src="/images/icon-phone.svg" alt="Phone" />
                                    </div>
                                    <div className="footer-contact-content">
                                        <p><a href="tel:078859632">+01 780 859 632</a></p>
                                    </div>
                                </div>
                                {/* Footer Contact Item End */}
                            </div>
                            {/* Footer Contact Box End */}
                        </div>
                        {/* Footer Content End */}
                    </div>
                </div>

                {/* Footer Copyright Section Start */}
                <div className="footer-copyright">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            {/* Footer Social Icon Start */}
                            <div className="footer-social-icon">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            {/* Footer Social Icon End */}
                        </div>

                        <div className="col-lg-6 col-md-6">
                            {/* Footer Copyright Start */}
                            <div className="footer-copyright-text">
                                <p>Copyright © 2025 All Rights Reserved.</p>
                            </div>
                            {/* Footer Copyright End */}
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Section End */}
            </div>
        </footer>
    );
};

export default Footer;
