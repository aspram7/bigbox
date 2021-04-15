import React from "react";
import ProductCarousel from "./productCarousel";
import { connect , useSelector, useDispatch } from "react-redux";

import classes from "./bestSeller.module.css";

const BestSeller = () => {

  const {name, count} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleCount = () => {
    dispatch(
    {
      type: "CHANGE_COUNT",
      payload: count + 1
    })
    dispatch({
      type: "CHANGE_NAME",
      payload: name === "Janet" ? "Anna" : "Janet"
    })
  }

  return (
    <div className={classes.section}>
      <h4>{name}</h4>
      <button onClick={handleCount}>Click Me</button>
      <h4>{count}</h4>
      <h4>ԱՄԵՆԱՎԱՃԱՌՎԱԾ</h4>
      <ProductCarousel />
    </div>
  );
};

export default BestSeller;
