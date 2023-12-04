import React from 'react';
import "./InputText.sass";

const InputText = ({ value, onChange, type = "text", placeholder }) => {
    return (
        <input
            type={type}
            className="InputText"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputText;
