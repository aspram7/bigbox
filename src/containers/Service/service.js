import React from "react";

import classes from "./service.module.css";

const Service = () => {
  return (
    <div className={classes.section}>
      <div className={classes.serviceItem}>
        <div className={classes.serviceImg}>
          <span className={classes.serviceImgFastShipping}></span>
        </div>
        <div>
          <h6>Արագ Առաքում</h6>
          <p>Արագ եւ արդյունավետ առաքում</p>
        </div>
      </div>
      <div className={classes.serviceItem}>
        <div className={classes.serviceImg}>
          <span className={classes.serviceImgCallUs}></span>
        </div>
        <div>
          <h6>Զանգահարեք Մեզ</h6>
          <p>Միշտ սպասում ենք Ձեր զանգին</p>
        </div>
      </div>
      <div className={classes.serviceItem}>
        <div className={classes.serviceImg}>
          <span className={classes.serviceImgHighService}></span>
        </div>
        <div>
          <h6>Բարձրակարգ Սպասարկում</h6>
          <p>Սիրում ենք մեր հաճախորդներին</p>
        </div>
      </div>
      <div className={classes.serviceItem}>
        <div className={classes.serviceImg}>
          <span className={classes.serviceImgGifts}></span>
        </div>
        <div>
          <h6>Որակյալ Նվերներ</h6>
          <p>Միայն որակյան նվերներ</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
