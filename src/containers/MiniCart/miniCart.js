import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { removeItemFromCart } from "../../store/action";

import classes from "./miniCart.module.css";

const MiniCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setReduxCartData } = useSelector((state) => state.cartReducer);

  const removeItem = async (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleCart = () => {
    history.push(`/cart`);
  };

  let price = 0;

  for (let i in setReduxCartData) {
    price += setReduxCartData[i].price * setReduxCartData[i].quantity;
  }

  return (
    <div className={`${classes.section} mini-cart`}>
      {setReduxCartData.length !== 0 ? (
        setReduxCartData.map((el, idx) => {
          return (
            <div className={classes.content} key={idx}>
              <img
                src={`https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/${el.thumbnail}`}
                alt=""
              />
              <div className={classes.text}>
                <div>
                  <p className={classes.name}>{el.name}</p>
                  <p className={classes.price}>{el.price}</p>
                  <p className={classes.quantity}>{el.quantity}</p>
                </div>
                <span className={classes.trash} onClick={() => removeItem(el.id)}></span>
              </div>
            </div>
          );
        })
      ) : (
        <div className={classes.empty}>Զամբյուղը դատարկ է</div>
      )}

      <div className={classes.total}>
        <p>ԸՆԴԱՄԵՆԸ</p>
        <p>{price}</p>
      </div>
      <div className={classes.miniCartButton}>
        <Button onClick={handleCart}>ԱՄԲՈՂՋ ԶԱՄԲՅՈՒՂԸ</Button>
        <Button>ՁԵՎԱԿԵՐՊԵԼ ՊԱՏՎԵՐ</Button>
      </div>
    </div>
  );
};

export default MiniCart;
