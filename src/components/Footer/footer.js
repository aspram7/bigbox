import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import logoFooter from "../../assets/svg/footer/logo-footer.svg";
import locationFooter from "../../assets/svg/footer/location-footer.svg";
import mailFooter from "../../assets/svg/footer/email-footer.svg";
import phoneFooter from "../../assets/svg/footer/phone-footer.svg";
import cardsFooter from "../../assets/svg/footer/cards-footer.svg";
import facebook from "../../assets/svg/footer/facebook.svg";
import instagram from "../../assets/svg/footer/instagram.svg";
import twitter from "../../assets/svg/footer/twitter.svg";
import linkedin from "../../assets/svg/footer/linkedin.svg";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.section}>
      <Layout>
        <div className={classes.footerBlock}>
          <div className={classes.footerBlockItem}>
            <img src={logoFooter} alt="Logo" />
            <div className={classes.footerInfoItem}>
              <div>
                <span>
                  <img src={locationFooter} alt="address" />
                </span>
                <p>Հասցե 3/5, Երեւան, ՀՀ</p>
              </div>
              <div>
                <span>
                  <img src={mailFooter} alt="mail" />
                </span>
                <p>giftshop@gmail.com</p>
              </div>
              <div>
                <span>
                  <img src={phoneFooter} alt="address" />
                </span>
                <p>(044) 989 - 177</p>
              </div>
            </div>
            <img src={cardsFooter} alt="cards" />
          </div>
          <div className={classes.footerBlockItem}>
            <div className={classes.footerBlockHeader}>
              <h4>ԱՊՐԱՆՔՆԵՐ</h4>
            </div>
            <div className={classes.footerBlockContent}>
              <p>Զարդեր</p>
              <p>Տուփեր</p>
              <p>Մանկական</p>
              <p>Կանանց</p>
              <p>Տան</p>
            </div>
          </div>
          <div className={classes.footerBlockItem}>
            <div className={classes.footerBlockHeader}>
              <h4>ՀԱՇԻՎ</h4>
            </div>
            <div className={classes.footerBlockContent}>
              <p>Իմ Էջը</p>
              <p>Գրանցվել</p>
              <p>Մուտք</p>
              <p>Առաքում</p>
              <p>Վճարում</p>
            </div>
          </div>
          <div className={classes.footerBlockItem}>
            <div className={classes.footerBlockHeader}>
              <h4>ԳՐԱՆՑՎԵԼ</h4>
            </div>
            <p className={classes.footerBlockRedText}>
              Գրանցվեք նորությունների համար և ստացեք 2% զեղչ:
            </p>
            <div className={classes.footerBlockMedia}>
              <div>
                <input type="text" placeholder="Էլ. հասցե" />
                <Button classes={{ button: classes.footerButton }}>ԳՐԱՆՑՎԵԼ</Button>
              </div>
              <div className={classes.footerBlockSocialMedia}>
                <div>
                  <img src={facebook} alt="facebook" />
                </div>
                <div>
                  <img src={instagram} alt="instagram" />
                </div>
                <div>
                  <img src={twitter} alt="twitter" />
                </div>
                <div>
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
