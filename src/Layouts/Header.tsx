import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';


const Header = ({logo, title}:any) => {

  // Lắng nghe sự kiện scroll
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
      setIsVisible(!isVisible);
  };

  // const sidebar:HTMLElement = document.getElementsByClassName('hamburger');
  // const isClick = false;

  // sidebar.addEventListener("click", () => {
  //   if (isClick) {
  //     sidebar.style.width = '0';
  //     isClick = false; 
  //   } else {
  //     sidebar.style.width = '300px';
  //   }
  // })

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
                    <div className="hamburger" onClick={toggle}>
                      <FontAwesomeIcon icon={faBars} style={{color: "#0D0D0D",}} className="menu-icon"/>
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
            {isVisible && (
            <div className="header_sidebar">
              <div className="menu">
                <div className="introduce">
                    <Link to="/" className="link">
                      Introduce
                    </Link>
                </div>
                <div className="cart">
                  <Link className="cart-btn" to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} className="icon-cart"/>
                  Cart
                  </Link>
                </div>
              </div>

            </div>
            )}
        </div>
    )
};

export default Header;