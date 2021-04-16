import React from "react";
import Button from "../../components/Button";
import { useQueries } from "../../api/service";
import { useSelector, useDispatch } from "react-redux";

import classes from "./miniCart.module.css";

const MiniCart = () => {
  const { setReduxCartData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { removeItemFromCart, getCartData } = useQueries();

  const removeItem = async (id) => {
    await removeItemFromCart({
      variables: {
        cartId: localStorage.getItem("id"),
        itemId: id,
      },
    });
    const res = await getCartData({variables: {cartId: localStorage.getItem("id")}});
    console.log(res,111)
    // dispatch({
    //   type: "REMOVE_ITEM_FROM_CART",
    //   payload: res,
    // });
  };

  return (
    <div className={`${classes.section} mini-cart`}>
      {setReduxCartData &&
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
        })}

      <div className={classes.total}>
        <p>ԸՆԴԱՄԵՆԸ</p>
        <p>15.000Դ</p>
      </div>
      <div className={classes.miniCartButton}>
        <Button>ԱՄԲՈՂՋ ԶԱՄԲՅՈՒՂԸ</Button>
        <Button>ՁԵՎԱԿԵՐՊԵԼ ՊԱՏՎԵՐ</Button>
      </div>
    </div>
  );
};

export default MiniCart;
