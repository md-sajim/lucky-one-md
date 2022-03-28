import React from "react";
import "./Chooseproduct.css";

const Chooseproduct = () => {
  return (
    <div className="chooseproducts">
      <div>
        <p>Selected Bike</p>
      </div>
      <div></div>
      <div className="buttonstyle">
        <button className="but">CHOOSE BIKE</button>
        <br></br>
        <button className="but2">CHOOSE AGAIN</button>
      </div>
    </div>
  );
};

export default Chooseproduct;
