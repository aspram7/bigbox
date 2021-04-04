import React from "react";
import PropTypes from "prop-types";
import mergeClasses from "../../helpers/mergeClasses";
import defaultClasses from "./button.module.css";

const button = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

button.defaultProps = {
  onClick: () => {},
  children: "",
};

button.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default button;
