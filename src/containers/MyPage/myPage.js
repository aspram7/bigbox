import React, { useState } from "react";

import classes from "./myPage.module.css";

const MyPage = () => {
  const [contentPage, setContentPage] = useState(0);
  const changeContent = (n) => {
    setContentPage(n);
  };
  return (
    <div className={classes.section}>
      <h4>Զամբյուղ</h4>
      <div className={classes.menu}>
        <div
          className={contentPage === 0 ? classes.active : classes.menuItem}
          onClick={() => changeContent(0)}
        >
          ԳԼԽԱՎՈՐ
        </div>
        <div
          className={contentPage === 1 ? classes.active : classes.menuItem}
          onClick={() => changeContent(1)}
        >
          ՊԱՏՎԵՐՆԵՐ
        </div>
        <div
          className={contentPage === 2 ? classes.active : classes.menuItem}
          onClick={() => changeContent(2)}
        >
          ՀԱՍՑԵՆԵՐ
        </div>
        <div
          className={contentPage === 3 ? classes.active : classes.menuItem}
          onClick={() => changeContent(3)}
        >
          ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ
        </div>
        <div
          className={contentPage === 4 ? classes.active : classes.menuItem}
          onClick={() => changeContent(4)}
        >
          ԵԼՔ
        </div>
      </div>
    </div>
  );
};

export default MyPage;
