import React from "react";

const ColorSelect = ({ colorName, value, onChange, selectColor, children }) => {
  return (
    <div>
      <select name={colorName} value={selectColor} onChange={onChange}>
        <option value={value}>{children}</option>
      </select>
    </div>
  );
};

export default ColorSelect;
