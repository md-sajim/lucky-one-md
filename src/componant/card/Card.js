import React from "react";
import "./Card.css";

const Card = (props) => {
  const { Name, img, price } = props.bike;
  console.log(img);
  return (
    <div className="col-lg-3 col-sm-12 mt-3">
      <div className="card cordmargin">
        <img src={img} className="card-img-top" alt="..." />
        <div>
          <h5 className="card-title">{Name}</h5>
          <h4>Price:{price}</h4>
          <div>
            <button className="cardstylebtn">Choose Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
