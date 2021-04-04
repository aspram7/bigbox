import React, { useContext } from "react";
import { WidthContext } from "../../App";
import cloudCoral from "../../assets/svg/cloud-coral.svg";
import cloudPastelGreen from "../../assets/svg/cloud-pastel-green.svg";
import classes from "./menu.module.css";

const Menu = () => {
  const width = useContext(WidthContext);
  if (width < 992) {
    return null;
  }
  return (
    <div className={classes.nav}>
      <ul className={classes.navList}>
        <li>ԿԱՆԱՆՑ</li>
        <li>ՏՂԱՄԱՐԴԿԱՆՑ</li>
        <li>
          <div className={classes.cloud}>
            <img src={cloudCoral} alt="cloud coral" />
            <p>ԶԵՂՉ</p>
          </div>
          ՄԱՆԿԱԿԱՆ
        </li>
        <li>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</li>
        <li>ՏԱՆ</li>
        <li>
          <div className={classes.cloud}>
            <img src={cloudPastelGreen} alt="cloud pastel green" />
            <p>ՆՈՐ</p>
          </div>
          ԽՈՀԱՆՈՑԱՅԻՆ
        </li>
        <li>ԱՅԼ</li>
      </ul>
      <span className={classes.search}></span>
    </div>
  );
};

export default Menu;
