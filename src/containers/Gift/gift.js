import React from "react";
import Banner from "../../components/Banner";

import teaCup from "../../assets/images/tea-cup.jpg";
import giftLight from "../../assets/images/gift-light.jpg";

import classes from "./gift.module.css";

const gift = () => {
  return (
    <div className={classes.section}>
      <Banner classes={{ banner: classes.bannerTeaCup }} url={teaCup} bannerText={"center-right"}>
        <p className={classes.text}>ԽՈՀԱՆՈՑԱՅԻՆ</p>
        <p className={classes.textSale}>ԲԱԺԱԿ</p>
      </Banner>
      <Banner
        classes={{ banner: classes.bannerGiftLight }}
        url={giftLight}
        bannerText={"top-center"}
      >
        <p className={classes.text}>ԶՎԱՐՃԱԼԻ ՆՎԵՐՆԵՐ</p>
        <p className={classes.textSale}>ԼՈՒՅՍԵՐ</p>
      </Banner>
    </div>
  );
};

export default gift;
