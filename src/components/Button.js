import React from "react";

const Button = ({ name }) => {
  return (
    <div className="pt-2">
      <button className="px-8 p-2 m-2 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
