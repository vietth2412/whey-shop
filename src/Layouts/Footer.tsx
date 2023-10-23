import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCow} from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-wrapper_content about">
                    <span> About </span>
                    <ul className="all about_sub-menu">
                        <li className="sub-menu--child"> 
                            <FontAwesomeIcon icon={faCow} style={{color: "#ffffff",}} />
                            <Link to="/ErrorPage" className="link--footer"> History </Link> 
                        </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Foundation </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Activities </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Located </Link> </li>
                    </ul>
                </div>
                <div className="footer-wrapper_content category">
                    <span> Category </span>
                    <ul className="all category_sub-menu">
                        <li className="sub-menu--child"> 
                        <FontAwesomeIcon icon={faCow} style={{color: "#ffffff",}} />
                        <Link to="/ErrorPage" className="link--footer"> Products </Link> 
                        </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Powder </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Shaker </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Event </Link> </li>
                    </ul>
                </div>
                <div className="footer-wrapper_content support">
                    <span> Support </span>
                    <ul className="all support_sub-menu">
                        <li className="sub-menu--child">
                        <FontAwesomeIcon icon={faCow} style={{color: "#ffffff",}} /> 
                        <Link to="/ErrorPage" className="link--footer"> Return </Link> 
                        </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Foundation </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Advise </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Nutritions </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Shipping </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> FAQ </Link> </li>

                    </ul>
                </div>
                <div className="footer-wrapper_content follow">
                    <span> Follow </span>
                    <ul className="all follow_sub-menu">
                        <li className="sub-menu--child"> 
                        <FontAwesomeIcon icon={faCow} style={{color: "#ffffff",}} />
                        <Link to="/ErrorPage" className="link--footer"> History </Link> 
                        </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Foundation </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Activities </Link> </li>
                        <li className="sub-menu--child"> <Link to="/ErrorPage" className="link--footer"> Located </Link> </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copy">
                <span>
                    Copyright @2022 Applied Nutrition. All Rights Reserved.
                </span>
            </div>
        </div>
        </>
    )
}

export default Footer;