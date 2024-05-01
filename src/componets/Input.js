import React from 'react';

const Input = ({ tipo, placeholder, value, onChange }) => {
  return (
    <input type={tipo} placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
