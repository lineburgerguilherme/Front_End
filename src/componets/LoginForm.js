import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from './services/login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const history = useHistory();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await login(email, senha);
      if (token) {
        history.push('/dashboard'); // Redireciona para a página de dashboard após o login
      }
    } catch (error) {
      setErro('Falha ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleChangeEmail} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={handleChangeSenha} />
      </div>
      {erro && <p>{erro}</p>}
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
