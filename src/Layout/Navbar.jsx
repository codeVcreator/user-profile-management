import React, { useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "../Components/bynry-logo.webp";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMobile(false);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={companyLogo} alt="Byrny Logo" className="logo" />
                </Link>
            </div>
            <div className={`links ${isMobile ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <Link to="/" 
                              className={location.pathname === "/" ? "active" : ""}
                              onClick={handleLinkClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" 
                              className={location.pathname === "/about" ? "active" : ""}
                              onClick={handleLinkClick}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" 
                              className={location.pathname === "/contact" ? "active" : ""}
                              onClick={handleLinkClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Link to="https://www.bynry.com/" target="_blank">
                    <button className="know-more" onClick={handleLinkClick}>
                        Know More About Us
                    </button>
                </Link>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default Navbar;
