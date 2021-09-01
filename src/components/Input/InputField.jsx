import React from 'react';
import './InputField.css';
const InputField = (props) => {
  const { width, height, placeholder } = props;
  return (
    <div className="input-container">
      <input
        className="input-content"
        style={{ width: width || '100%', height: height || '2.5rem' }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
