import React, { useState, useEffect, useRef } from "react";

const Image = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current.complete && props.handleSizes) {
      props.handleSizes(ref.current.naturalWidth, ref.current.naturalHeight);
    }
  }, [ref.current]);

  return <img src={props.imgUrl} ref={ref} alt="" />;
};

export default Image;
