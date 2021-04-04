import React from "react";
import mergeClasses from "../../helpers/mergeClasses";

import defalutClasses from "./banner.module.css";

const HomeImages = (props) => {
  const classes = mergeClasses(defalutClasses, props.classes);
  return (
    <div className={classes.banner}>
      <img src={props.url} alt="url" />
      <div className={classes[props.bannerText]}>{props.children}</div>
    </div>
  );
};

export default HomeImages;
