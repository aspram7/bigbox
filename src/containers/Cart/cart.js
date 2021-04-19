import React, { useState } from "react";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart, setItemToCart } from "../../store/action";

import classes from "./cart.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const { setReduxCartData } = useSelector((state) => state);

  const removeItem = async (id) => {
    dispatch(removeItemFromCart(id));
  };

  const changeQuantity = (id, quantity, n) => {
    if (quantity <= 1 && n === -1) return;
    dispatch(setItemToCart(id, quantity + n));
  };

  let price = 0;

  for (let i in setReduxCartData) {
    price += setReduxCartData[i].price;
  }

  return (
    <div className={classes.section}>
      <h4>Զամբյուղ</h4>
      <div className={classes.table}>
        <div className={classes.head}>
          <div className={classes.remove}></div>
          <div className={classes.name}>ԱՊՐԱՆՔ</div>
          <div className={classes.price}>ԳԻՆ</div>
          <div className={classes.quantity}>ՔԱՆԱԿ</div>
          <div className={classes.total}>ԸՆԴԱՄԵՆԸ</div>
        </div>
        {setReduxCartData &&
          setReduxCartData.map((el, idx) => {
            return (
              <div className={classes.body} key={idx}>
                <div className={classes.remove}>
                  <span className={classes.removeX} onClick={() => removeItem(el.id)}></span>
                </div>
                <div className={classes.name}>
                  <img
                    src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.thumbnail}`}
                    alt=""
                  />
                  <p>{el.name}</p>
                </div>
                <div className={classes.price}>{el.price}</div>
                <div className={classes.quantity}>
                  <input
                    type="number"
                    value={el.quantity}
                    onChange={(e) => {
                      if (!e.target.value) return;
                      // setQuantity(+e.target.value);
                    }}
                    className={classes.quantityNumber}
                  />
                  <div className={classes.arrows}>
                    <span
                      className={classes.arrowTop}
                      onClick={() => changeQuantity(el.id, el.quantity, 1)}
                    ></span>
                    <span
                      className={classes.arrowDown}
                      onClick={() => changeQuantity(el.id, el.quantity, -1)}
                    ></span>
                  </div>
                </div>
                <div className={classes.total}>{el.quantity * el.price}</div>
              </div>
            );
          })}
      </div>
      <div className={classes.totalPrice}>
        <p>ԸՆԴԱՄԵՆԸ:</p>
        <p>{price}</p>
      </div>
      <p className={classes.rules}>Shipping, taxes, and discounts will be calculated at checkout</p>
      <div className={classes.cartButton}>
        <Button>ՇԱՐՈՒՆԱԿԵԼ ԳՆՈՒՄՆԵՐԸ</Button>
        <Button>ՁԵՎԱԿԵՐՊԵԼ ՊԱՏՎԵՐ</Button>
      </div>
    </div>
  );
};

export default Store;
