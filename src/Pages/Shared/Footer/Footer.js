import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <p className="m-0 py-3"> &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;