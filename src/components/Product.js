
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <strong className="Rs">Rs</strong>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
      </div>

      

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
