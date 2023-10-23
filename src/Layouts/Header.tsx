import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';



const Header = ({logo, title}:any) => {

  // Lắng nghe sự kiện scroll



    return(

        // section header type menu
        <div className="header" id="navbar">
            <div className="header_menu">
                <div className="menu-content">
                  <div className="menu-content_left">
                    <div className="logo">
                      <img src={logo} alt="logo" className="logo-img"/>
                    </div>
                    <div className="sub-menu">
                      <ul className="menu">
                        <li className="menu_item"> Home </li>
                        <li className="menu_item"> Product
                              <ul className="sub-menu--product">
                                <li className="sub-menu--product_item"> <Link to="/ErrorPage" className="link">Protein Support</Link> </li>
                                <li className="sub-menu--product_item"> <Link to="/ErrorPage" className="link">Strength Support</Link> </li>
                                <li className="sub-menu--product_item"> <Link to="/ErrorPage" className="link">Cuisine Support</Link> </li>
                                <li className="sub-menu--product_item"><Link to="/ErrorPage"
                                className="link"> Diet Support</Link> </li>
                              </ul>
                        </li>
                        <li className="menu_item"> Sale Off </li>
                        <li className="menu_item"> Contact </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-content_right">
                    <div className="user">
                    </div>
                  <div className="cart">
            
                      <Link className="cart-btn" to="/cart">
                      <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                      Cart
                      </Link>
                  </div>
                  </div>
                </div>
            </div>

            {/* // section header type banner */}
            {/* <div className="header_banner">
             <div className="introduce"> 
                 <div className="title">
                   <div className="content">
                     <h2>
                     {title} 
                     </h2>
                     <span>
                       Complete a register to own your account here.
                     </span>
                   </div>
                   <div className="buy-now">
                     <a href="#body" className="access-btn"> Explore More <FontAwesomeIcon icon={faArrowDown} /> </a>
                     <a href="/LogInPage" className="access-btn"> Get Started <FontAwesomeIcon icon={faArrowRight} /> </a>
                   </div>
                 </div>
             </div>
           </div> */}
        </div>
    )
};

export default Header;