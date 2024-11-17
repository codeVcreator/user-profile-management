import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../Components/bynry-logo.webp";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={companyLogo} alt="Byrny Logo" className="logo" />
                </Link>
            </div>
            <div className="links">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
                    </li>
                </ul>
                <Link to="https://www.bynry.com/" target="_blank">
                    <button className="know-more">Know More About Us</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
