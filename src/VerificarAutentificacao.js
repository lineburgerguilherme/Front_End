import React from 'react';
import { Redirect } from 'react-router-dom';

const VerificarAutenticacao = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Redirect to="/login" />; // Redireciona para a página de login se o token não estiver presente
  }

  // Lógica adicional de verificação de token, como verificação de expiração, poderia ser adicionada aqui

  return <>{children}</>;
};

export default VerificarAutenticacao;
