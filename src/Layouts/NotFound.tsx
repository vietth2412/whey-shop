import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {

    return(
        <div className="Error-Page">
            <div className="error-content">
                <div className="not-found">
                    <span className="not-found_code"> 404 </span>
                    <span className="not-found_notice"> Oops! Page not found </span>
                    <span className="not-found_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                    <Link className="return" to="/">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;