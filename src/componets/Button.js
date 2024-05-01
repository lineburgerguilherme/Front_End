import React from 'react';
import styles from './Button.module.css'
const Button = ({ texto, onClick }) => {
  return (
    <button styles  onClick={onClick}>
      {texto}
    </button>
  );
};

export default Button;
