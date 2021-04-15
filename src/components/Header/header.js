import React, { useContext } from "react";
import Layout from "../Layout";
import Menu from "../Menu";
import { WidthContext } from "../../App";
import bigboxLogoHeader from "../../assets/svg/bigbox-logo-header.svg";
import hamburgerMenu from "../../assets/svg/hamburger-menu.svg";
import MiniCart from "../../containers/MiniCart";

import classes from "./header.module.css";

const Header = () => {
  const width = useContext(WidthContext);

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
              <span className={classes.smile}></span>
              <div>
                <p>
                  Գրանցում <span>/ Մուտք</span>{" "}
                </p>
              </div>
            </div>
            <div className={classes.cart}>
              <span className={classes.bag}>
                <div>2</div>
              </span>
              <div>Զամբյուղ</div>
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
