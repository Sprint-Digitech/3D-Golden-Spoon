import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600); // fadeOut(600) equivalent

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader" style={{ display: loading ? 'block' : 'none', opacity: loading ? 1 : 0, transition: 'opacity 0.6s' }}>
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon">
                    <img src="/images/loader.svg" alt="loader" />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
