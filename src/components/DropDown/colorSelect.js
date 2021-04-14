import React, { useEffect, useRef, useState } from "react";

import classes from "./colorSelect.module.css";

const ColorSelect = ({ value, options, onChange }) => {
  const [openSelect, setOpenSelect] = useState(false);

  const ref = useRef();

  const handleToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  useEffect(() => {
    function f(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenSelect(false);
      }
    }
    window.addEventListener("click", f);
    return () => {
      window.removeEventListener("click", f);
    };
  }, []);

  const onClick = (el) => {
    onChange(el);
    setOpenSelect(false);
  };

  return (
    <div>
      <div className={classes.select} ref={ref}>
        <div className={classes.header} onClick={handleToggleSelect}>
          {value.name}
          <span className={openSelect ? `${classes.arrowUp}` : `${classes.arrowDown}`}></span>
        </div>
        {openSelect && (
          <div className={classes.body}>
            {options.map((el) => {
              return (
                <div key={el.id} className={classes.item} onClick={() => onClick(el)}>
                  <span style={{ backgroundColor: el.color }}></span>
                  {el.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelect;
