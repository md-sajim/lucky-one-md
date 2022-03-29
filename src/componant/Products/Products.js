import React, { useEffect, useState } from "react";
import Card from "../card/Card";
// import Chooseproduct from "../Chooseproduct/Chooseproduct";
import "./Products.css";

const Products = () => {
  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState([]);
  const handeal = (bikee) => {
    const newbike = [...bike, bikee];
    setBike(newbike);
  };

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-4">
        <div className="chooseproducts">
          <div>
            <p>Selected Bike</p>
          </div>
          <div>
            {bike.map((item) => (
              <p key={item.id}>{item.Name}</p>
            ))}
          </div>
          <div className="buttonstyle">
            <button className="but">CHOOSE BIKE</button>
            <br></br>
            <button className="but2">CHOOSE AGAIN</button>
          </div>
        </div>

        {/* <Chooseproduct></Chooseproduct> */}
      </div>
      <div className="row col-sm-12 col-lg-8 pro4ductstyle">
        {bikes.map((bike) => (
          <Card key={bike.id} bike={bike} handeal={handeal}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
