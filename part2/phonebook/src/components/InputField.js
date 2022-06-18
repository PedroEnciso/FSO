import React from "react";

const InputField = ({ type, label, value, handler }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type="text" value={value} onChange={handler} />
    </div>
  );
};

export default InputField;
