import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="hero">
            <div className="homepage">

                {/* Header */}
                <div className="homepage-content">
                    <h1>
                        Login <span>as</span>
                    </h1>
                </div>

                {/* Cards */}
                <div className="home-card-container homepage-content">

                    {/* Admin Card */}
                    <Link to="/admin" className="home-link">
                        <div className="home-card admin">
                            <p>Admin</p>
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="home-icons"
                            />
                        </div>
                    </Link>
                    
                    {/* Customer Card */}
                    <Link to="/customer" className="home-link">
                        <div className="home-card customer">
                            <p>Customer</p>
                            <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="home-icons"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
