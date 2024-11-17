import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error hero">
            <FontAwesomeIcon icon={faTriangleExclamation} className="icon" />
            <h1>Error 404</h1>
            <p>Sorry, The page you requested could not be found.</p>


            {/* Link kaha karogeeeee?????????? */}
            <Link to="/" className="go-back">                      
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="icon left-icon"
                />
                <span>Go Back</span>
            </Link>
        </div>
    );
};

export default Error;
