import React from "react";

const FormInput = (props) => {
  const { name, type, title, value, onChange } = props;
  return (
    <div className="input-group">
      <span className="label">{title}</span>
      <div className="range-container">
        <input type={type} name={name} className="range-input" value={value} onChange={onChange} autoComplete="false" />
      </div>
    </div>
  );
};

export default FormInput;
