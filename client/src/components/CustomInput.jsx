import React from "react";

const CustomInput = (props) => {
  const {type, name, placeholder, value, onBlur, className,onChange, disabled} = props
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
