import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, onClick, className, type = "button", link}) => {
  return (
        <Link to={link}>
          <button className={className} onClick={onClick} type={type}>
            {text}
          </button>
        </Link>
  );
};

export default Button;