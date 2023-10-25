import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// row 1
// import beepXp from '../Image/beep-xp-protein.jpg';
import mass from "../Image/mass-protein.jpg";
import dietWhey from "../Image/diet-whey-protein.jpg";
import casein from "../Image/casein-protein.jpg";
import iso from "../Image/iso-xp-protein.jpg";

// row 2
import barProtein from "../Image/crunch-bar-protein.jpg";
import vegan from "../Image/vegan-protein.jpg";
import clearVegan from "../Image/clear-vegan-protein.jpg";
import cream from "../Image/Banana-Cream.jpg";
import cookie from "../Image/coockie.jpg";

// row3
import pre from "../Image/applid-pre.png";
import arginnie from "../Image/arginnie.png";
import hmb from "../Image/HMB.jpg";
import beta from "../Image/beta-alanine.jpg";
import citruline from "../Image/citruline.jpg";

// row4
import creatine from "../Image/creatine-mono.jpg";
import aakg from "../Image/aakg.jpg";
import bcaa from "../Image/bcaa.jpg";
import eaa from "../Image/eaa.jpg";
import abe from "../Image/abe-bump.jpg";

// row5
import barProtein2 from "../Image/indulegence protein bar.jpg";
import crunchBar from "../Image/crunch-bar-protein.jpg";
import swirl from "../Image/swirl-bar.jpg";
import syrup1 from "../Image/syrup-low-cal.jpg";
import syrup2 from "../Image/sauce-low-cal-428ml.jpg";

import Product from "./product";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getHomePageApi } from "../API";
import "./../App.css";
import { addToCart } from "../services/cart.service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Body = ({ title }: any) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getHomePageData();
  }, []);
  const getHomePageData = async () => {
    const res = await getHomePageApi();
    setCategories(res.categories);
    setProducts(res.products);
  };
  const changeTab = (tabId: any) => () => {
    setSelectedCategory(tabId);
  };
  return (
    <>
      <div className="body" id="body">
      <ToastContainer />
        <div className="banner">
          <div className="introduce">
            <div className="title">
              <div className="banner--content">
                <h2>{title}</h2>
                <span>Complete a register to own your account here.</span>
              </div>
              <div className="buy-now">
                <a href="#body" className="access-btn">
                  {" "}
                  Explore More <FontAwesomeIcon icon={faArrowDown} />{" "}
                </a>
                <a href="/LogInPage" className="access-btn">
                  {" "}
                  Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs">
          <div
            className={`tab ${!selectedCategory ? "active-tab" : ""}`}
            onClick={changeTab("")}
          >
            All
          </div>
          {categories.map((x) => (
            <div
              className={`tab ${selectedCategory == x.id ? "active-tab" : ""}`}
              onClick={changeTab(x.id)}
            >
              {x.name}
            </div>
          ))}
        </div>
        <div className="menu-mobile">
            <FontAwesomeIcon icon={faBars} className="menu-icon" style={{color: "#0d0d0d",}} />
        </div>
        <div className="content">
          <div className="all-product">
            {products
              .filter(
                (x) => x.categoryId == selectedCategory || !selectedCategory
              )
              .map((x) => (
                <Product
                  id={x.id}
                  type="Protein Support"
                  name={x.name}
                  price={x.price}
                  image={x.imageUrl}
                  description={x.description}
                  onAddToCart={() => addToCart(x)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
