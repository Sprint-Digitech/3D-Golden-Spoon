import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import { useInitAnimations } from '../hooks/useInitAnimations';

const Layout = () => {
    // This hook will fire every time the route changes, re-initializing GSAP/jQuery plugins.
    useInitAnimations();

    return (
        <>
            <Preloader />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
