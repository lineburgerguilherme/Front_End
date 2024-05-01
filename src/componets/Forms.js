import React from 'react';

const Formulario = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Formulario;
