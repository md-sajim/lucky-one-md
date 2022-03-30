import React from "react";
import "./Chooseproduct.css";
import { AiTwotoneDelete } from "react-icons/ai";

const Chooseproduct = ({ item }) => {
  const { Name, img } = item;
  return (
    <div className="img-div-style">
      <img className="img-style" src={img} alt="..." />
      <p>{Name}</p>
      <p className="delet">
        <AiTwotoneDelete className="delet-style" />
      </p>
    </div>
  );
};

export default Chooseproduct;
