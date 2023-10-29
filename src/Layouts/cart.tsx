import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";
import {
  Elements,
  ElementsConsumer,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  addToCart,
  decreaseCart,
  getCart,
  removeCartItem,
} from "../services/cart.service";

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


import { Modal } from "antd";
import PaymentModal from "../components/PaymentModal";
import { loadStripe } from "@stripe/stripe-js";



const stripeConfig = loadStripe(
  "pk_test_51O3xeCFxF3cTdtWE8aDGfIgeV537wdoJxoyTZ1pRWravkyMg1ig9zB3W3BALCvYoFyq6nNB1BZn9XlL6jpsKWQiT00dtqLi4EJ"
);
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModalPayment, sethowModalPayment] = useState(false);
  const increase = (product: any) => () => {
    addToCart(product);
    getCartDetail();
  };
  const decrease = (product: any) => () => {
    decreaseCart(product);
    getCartDetail();
  };

  const remove = (product: any) => () => {
    removeCartItem(product);
    getCartDetail();
  };

  useEffect(() => {
    getCartDetail();
  }, [showModalPayment]);
  

  const getCartDetail = () => {
    const cart = getCart();
    setCartItems(cart || []);
  };
  const totalAmount = cartItems.reduce(
    (amount, currentItem) =>
      currentItem.quantity * currentItem.product.price + amount,
    0
  );
  return (
    <>
      {/* <Header></Header> */}
      <div className="cart">
        <div className="cart-item">
          <div className="cart-item_product">
            {/* form cart */}
            <form action="" method="post" className="cart--form">
              <table cellSpacing="0" className="cart-table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name"> Product </th>
                    <th className="product-price"> Price </th>
                    <th className="product-quantity"> Quantity </th>
                    <th className="product-suptotal"> Type </th>
                    <th className="product-remove"> &nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((x) => (
                    <tr>
                      <td>
                        {" "}
                        <img width={50} src={x.product.imageUrl} />{" "}
                      </td>
                      <td> {x.product.name} </td>
                      <td> {x.product.price.toLocaleString("de-DE")} đ</td>
                      <td>
                        <div className="qty">
                          <div
                            className="qty_button plus"
                            onClick={increase(x.product)}
                          >
                            +
                          </div>
                          <input
                            className="qty_input"
                            type="text"
                            step="1"
                            min="0"
                            value={x.quantity}
                            autoComplete="off"
                            inputMode="numeric"
                            readOnly
                          />
                          <div
                            className="qty_button minus"
                            onClick={decrease(x.product)}
                          >
                            -
                          </div>
                        </div>
                      </td>
                      <td> {x.product.category.name} </td>
                      <td>
                        <span className="remove" onClick={remove(x.product)}>
                            <FontAwesomeIcon icon={faTrash} style={{color: "#6a5af9",}} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
          <div className="cart-item_payment">
            <div className="wrapper">
              <h2> Cart Totals </h2>
              <form action="" method="get" className="payment--form">
                <table className="payment-table">
                  <tbody>
                    <tr>
                      <th> Total Price </th>
                      <td>
                        {" "}
                        <span> {totalAmount.toLocaleString("de-DE")}đ </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <button onClick={() => sethowModalPayment(true)}> Thanh Toán </button>
              <Elements stripe={stripeConfig}>
                <PaymentModal
                  open={showModalPayment}
                  onClose={() => sethowModalPayment(false)}
                  totalAmount={totalAmount}
                />
              </Elements>
            </div>
            <div className="return">
              <Link to="/" className="rtn">
                  Buy More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
