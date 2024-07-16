import React from "react";

const Button = ({ children, classNames = "", onClick }) => {
    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
