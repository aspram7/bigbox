import React from "react";
import ProductCarousel from "./productCarousel";
import classes from "./bestSeller.module.css";

const BestSeller = () => {
  return (
    <div className={classes.section}>
      <h4>ԱՄԵՆԱՎԱՃԱՌՎԱԾ</h4>
      <ProductCarousel />
    </div>
  );
};

export default BestSeller;
