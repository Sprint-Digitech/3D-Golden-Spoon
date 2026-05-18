import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const THEME_STORAGE_KEY = 'golden-spoon-theme';

const getInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    try {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        return storedTheme === 'light' ? 'light' : 'dark';
    } catch (error) {
        return 'dark';
    }
};

const Header = () => {
    const location = useLocation();
    const logoSrc = '/images/golden-spoon-logo.png';
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = theme;
        root.style.colorScheme = theme;

        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (error) {
            // Ignore storage failures and keep the in-memory theme active.
        }
    }, [theme]);

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

    const isDarkTheme = theme === 'dark';

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand" to="/" aria-label="Golden Spoon Restaurant home">
                            <img
                                className="site-logo site-logo--header"
                                src={logoSrc}
                                alt="Golden Spoon Restaurant logo"
                                loading="eager"
                                decoding="async"
                            />
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
                                            <li className="nav-item"><Link className="nav-link" to="/chef-single/rakesh">Chef Single</Link></li>
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
                        </div>
                        {/* Main Menu End */}
                        <div className="header-controls">
                            {/* Header Social Icons Start */}
                            <div className="header-social-links">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/golden_spoon_restaurrant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="header-social-link" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            {/* Header Social Icons End */}

                            {/* Header Contact Box Start */}
                            <div className="header-btn">
                                <Link to="/contact" className="btn-default">book a table</Link>
                            </div>
                            {/* Header Contact Box End */}

                            <button
                                type="button"
                                className="theme-toggle-btn"
                                onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
                                aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
                                aria-pressed={!isDarkTheme}
                                title={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
                            >
                                <i className={`fa-solid ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
                            </button>
                        </div>
                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
};

export default Header;
