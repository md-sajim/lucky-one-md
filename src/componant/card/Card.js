import React from "react";
import "./Card.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Card = ({ bike, handeal }) => {
  const { Name, img, price } = bike;
  return (
    <div className="col-lg-3 col-sm-12 mt-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div>
          <h5 className="card-title">{Name}</h5>
          <h4>Price:{price}</h4>
          <div>
            <button onClick={() => handeal(bike)} className="btncolor">
              <MdOutlineAddShoppingCart className="butstyle" />
              Choose Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
