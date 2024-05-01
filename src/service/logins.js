import axios from 'axios';

const login = async (email, senha) => {
  try {
    const resposta = await axios.post('server.js', { email, senha });
    const { token } = resposta.data;
    localStorage.setItem('token', token); // Salva o token JWT no armazenamento local
    return token;
  } catch (error) {
    throw new Error('Falha ao fazer login. Verifique suas credenciais.');
  }
};

export default login;
