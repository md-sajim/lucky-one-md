import React from "react";

const Card = (props) => {
  const { Name, img, price } = props.bike;
  console.log(img);
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{Name}</h2>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default Card;
