import React from "react";
import data from "../../data-mockup/data";

import starGold from "../../assets/svg/star-gold.svg";
import starWhite from "../../assets/svg/star-white.svg";
import sign from "../../assets/svg/sign.svg";
import sold from "../../assets/svg/sold.svg";
import newTag from "../../assets/svg/tab-pastel-green.svg";
import saleTag from "../../assets/svg/tab-coral.svg";

import classes from "./newProducts.module.css";

function rating(n) {
  let ratingArray = [];
  for (let i = 1; i <= 5; i++) {
    ratingArray.push(i <= n);
  }
  return ratingArray;
}

const NewProducts = () => {
  return (
    <div className={classes.section}>
      <h4>ՆՈՐ ԱՊՐԱՆՔՆԵՐ</h4>
      <div className={classes.product}>
        {data
          .filter((el) => el.new)
          .map((el) => {
            return (
              <div key={el.id} className={classes.productItem}>
                <div className={classes.productImg}>
                  <img src={el.img} alt="img" />
                </div>
                <span className={classes.sign}>
                  <img src={el.exist ? sign : sold} alt="sign" />
                </span>
                <span className={classes.tab}>{el.new && <img src={newTag} alt="new" />}</span>
                <span className={classes.tab}>{el.sale && <img src={saleTag} alt="sale" />}</span>
                <div className={classes.productContent}>
                  <p className={classes.productTitle}>{el.title}</p>
                  <p className={classes.productPrice}>{el.originalPrice}</p>
                  <div className={classes.productRating}>
                    {rating(el.rating).map((item, idx) => {
                      return <img key={idx} src={item ? starGold : starWhite} alt="star" />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewProducts;
