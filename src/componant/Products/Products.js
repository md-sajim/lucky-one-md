import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Products = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div>
      <h1>Name:Sajim-2</h1>
      {bikes.map((bike) => (
        <Card key={bike.id} bike={bike}></Card>
      ))}
    </div>
  );
};

export default Products;
