import React from 'react';
import './InputField.css';
const InputField = (props) => {
  const { width, height, placeholder, type, name } = props;
  return (
    <div className="input-container">
      <input
        name={name}
        className="input-content"
        style={{ width: width || '100%', height: height || '2.5rem' }}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
