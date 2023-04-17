import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider.";

const Product = ({ title, image, price, id, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () =>
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        title,
        image,
        price,
        id,
        rating,
      },
    });

  return (
    <div className="product md:w-[100%]">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_,idex) => (
              <p key={idex} >⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
