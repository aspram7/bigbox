import React, { useContext } from "react";
import { WidthContext } from "../../App";
import defaultClasses from "./layout.module.css";

const Layout = ({ children }) => {
  const width = useContext(WidthContext);

  return (
    <div className={width > 992 ? defaultClasses.container : defaultClasses.containerMobile}>
      {children}
    </div>
  );
};

export default Layout;
