import React from 'react';
import {Link} from 'react-router-dom';

import '../SCSS/main.css';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const LogInPage = () => {

    return(

        <>
            <div className="logIn-page">
                <div className="logIn--form">
                    <div className="logIn--box">
                        <div className="box">
            
                            <div className="box_title">
                                <h1> Welcome Back </h1>
                                <span> Please! Log in with your account. </span>
                            </div>

                            <form action="" className="box_form">
                                <div className="top--box">
                                    <input type="text"  name="email"  required  className="email-input" placeholder=" "/>
                                    <label htmlFor="email" className="email"> Email </label>
                                </div>

                                <div className="bottom--box">
                                    <input type="password"  name="psw" required className="psw-input" placeholder=" " id="password"/>
                                    <label htmlFor="password" className="password"> Password</label>
                                </div>

                                <div className="remember">
                                    <input type="checkbox" />
                                    <span> Remember for 30 days</span>
                                </div>
                            </form>
                            
                            <div className="box_btn">
                                <button type="submit" className="sg-up-btn"> Log In </button>
                                <button type="submit" className="sg-up--social">
                                    <FontAwesomeIcon icon={faGoogle} className="social_icon" /> Google
                                </button>
                                <button type="submit" className="sg-up--social">
                                    <FontAwesomeIcon icon={faFacebook}className="social_icon"/> Facebook
                                </button>
                                    {/* <span> 
                                        Or
                                    </span> */}
                                    <Link   rel="stylesheet"
                                            className="lg-in-btn"
                                            to='/signUpPage'
                                            > Create New Account
                                    </Link>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogInPage;