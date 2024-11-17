import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullseye,
    faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div className="hero about">
            <div className="about-modal">
                <div>
                    <h1
                        style={{
                            color: "darkblue",
                            textAlign: "center",
                            marginBottom: "10px",
                        }}
                    >
                        About Us
                    </h1>
                </div>
                <h2>We are Bynry</h2>
                <p>
                    Bynry is a leading US-based Utility SaaS product company. We
                    are a team of vibrant digital transformers who are motivated
                    to transform the utility industry. Our SMART360 is an
                    Al-enabled Smart Utility Platform designed to meet the needs
                    of small and mid-sized utilities. It is a unified platform
                    for managing customer experience, work order management,
                    billing and payments, and asset management.
                </p>

                <div className="modal-heading">
                    <FontAwesomeIcon icon={faBullseye} className="icon" />
                    <h3 className="vision">Our Vision</h3>
                </div>
                <p>
                    Enhance Digital Infrastructure for 1000 SMB Utilities by
                    2030.
                </p>

                <div className="modal-heading">
                    <FontAwesomeIcon
                        icon={faArrowUpRightDots}
                        className="icon"
                    />
                    <h3 className="mission">Our Mission</h3>
                </div>
                <p>
                    Our mission is to enable Electric, Water, Sewer, & Gas
                    Utilities by providing a SaaS Smart Utility platform that
                    transforms the way utilities do business, manage revenue,
                    and delight customers.
                </p>
            </div>
        </div>
    );
};

export default About;
