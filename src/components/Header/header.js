import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CART_QUERY } from "../../GraphQl/queries";
import Layout from "../Layout";
import Menu from "../Menu";
import { WidthContext } from "../../App";
import bigboxLogoHeader from "../../assets/svg/bigbox-logo-header.svg";
import hamburgerMenu from "../../assets/svg/hamburger-menu.svg";
import Auth from "../../containers/Auth";
import MiniCart from "../../containers/MiniCart";

import classes from "./header.module.css";

const Header = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const width = useContext(WidthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, data: cartData } = useQuery(CART_QUERY, {
    variables: { cartId: localStorage.getItem("id") },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (localStorage.getItem("id") && loading === false) {
      dispatch({
        type: "CART_DATA",
        payload: {
          cartData: cartData && cartData.cart.items,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleCart = () => {
    history.push(`/cart`);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setModalToggle(true);
  };

  const handleClose = () => {
    setModalToggle(false);
  };

  if (width < 992) {
    return (
      <div className={classes.container}>
        <div className={classes.top}></div>
        <Layout>
          <div className={classes.contentMobile}>
            <div>
              <img src={hamburgerMenu} alt="hamburger menu" />
            </div>
            <div className={classes.logo}>
              <img src={bigboxLogoHeader} alt="logo" />
            </div>
            <div className={classes.headerTopRight}>
              <span className={classes.search}></span>
              <span className={classes.bagMobile}>
                <div>2</div>
              </span>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.top}></div>
      <Layout>
        <div className={classes.content}>
          <div className={classes.leftBox}>
            <div className={classes.address}>
              <div>
                <div className={classes.infoPhone}>
                  <span className={classes.infoPhoneImg}></span>
                  <div className={classes.infoPhoneText}>
                    <p>+044 17216621</p>
                    <p>+044 17216622</p>
                  </div>
                </div>
                <div className={classes.infoMail}>
                  <span className={classes.infoMailImg}></span>
                  <div>contact@bigbox.com</div>
                </div>
              </div>
              <div className={classes.shipping}>
                <span className={classes.shippingImg}></span>
                <div>Գործում է առաքում</div>
              </div>
            </div>
            <div className={classes.logo}>
              <img src={bigboxLogoHeader} alt="logo" />
            </div>
          </div>
          <div className={classes.rightBox}>
            <div>
              <div className={classes.auth} onClick={handleOpen}>
                <span className={classes.smile}></span>
                <p>
                  Գրանցում <span>/ Մուտք</span>{" "}
                </p>
              </div>
              <Auth show={modalToggle} handleClose={handleClose}></Auth>
            </div>
            <div className={classes.cart}>
              <div className={classes.cartHedaer} onClick={handleCart}>
                <span className={classes.bag}>
                  <div>2</div>
                </span>
                <div>Զամբյուղ</div>
              </div>
              <MiniCart />
            </div>
          </div>
        </div>
        <Menu />
      </Layout>
    </div>
  );
};

export default Header;
