import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        // Sticky Header Logic
        const handleScroll = () => {
            const fromTop = window.scrollY;
            const headerSticky = document.querySelector('header .header-sticky');
            if (headerSticky) {
                const headerHeight = headerSticky.offsetHeight;
                const mainHeader = document.querySelector("header.main-header");
                if (mainHeader) mainHeader.style.height = `${headerHeight}px`;

                if (fromTop > headerHeight + 100) {
                    headerSticky.classList.add("hide");
                } else {
                    headerSticky.classList.remove("hide");
                }
                if (fromTop > 600) {
                    headerSticky.classList.add("active");
                } else {
                    headerSticky.classList.remove("active");
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Re-init slicknav if needed
        if (window.$ && window.$('#menu').length) {
            // Remove existing slicknav menu if it exists to avoid duplication on route change
            window.$('.slicknav_menu').remove();

            window.$('#menu').slicknav({
                label: '',
                prependTo: '.responsive-menu'
            });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand" to="/">
                            <img src="/images/logo.png" alt="Golden Spoon Restaurant" />
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item submenu">
                                        <Link className="nav-link" to="/">Home</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" to="/index-2">Home - Image</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/index-video">Home - Video</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/index-slider">Home - Slider</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/menu">Menu</Link>
                                    </li>
                                    <li className="nav-item submenu"><Link className="nav-link" to="#">Pages</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" to="/chefs">Our Chefs</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/chef-single">Chef Single</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/blog-single">Blog Single</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/faqs">FAQs</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/image-gallery">Image Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/video-gallery">Video Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/testimonial">Testimonials</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/404">404 Page</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Header Contact Box Start */}
                            <div className="header-btn">
                                <Link to="/contact" className="btn-default">book a table</Link>
                            </div>
                            {/* Header Contact Box End */}
                        </div>
                        {/* Main Menu End */}
                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
};

export default Header;
