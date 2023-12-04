import React from 'react';
import "./Button.sass";

const Button = ({ text, primary, secondary, onClick, active }) => {
    const buttonClass = primary ? "button primary" : secondary ? "button secondary" : "button";
    const activeClass = active ? 'active' : '';

    return (
        <button className={`${buttonClass} ${activeClass}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
