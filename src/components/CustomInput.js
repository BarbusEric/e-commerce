import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname } = props;
  return (
    <div>
      <input
        className={`form-control ${classname}`}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
