import { Link } from "react-router-dom";
import { addToCart } from "../services/cart.service";
const Product = ({
  id,
  image,
  price,
  type,
  name,
  description,
  onAddToCart,
}: any) => {
  return (
    <div className="sup" key={id}>
      <div className="front-card">
        <img src={image} alt="mass" className="whey" />
        <div className="item">
          <span className="sup-type"> {type} </span>
          <span className="sup-item"> {name} </span>
          <span className="sup-price"> {price.toLocaleString("de-DE")}đ </span>
        </div>
      </div>
      <div className="back-card">
        <ul className="status">
          <li dangerouslySetInnerHTML={{ __html: description }}></li>
        </ul>
        <div className="btn" onClick={onAddToCart}>
          {" "}
          Bỏ giỏ hàng{" "}
        </div>
      </div>
    </div>
  );
};

export default Product;
