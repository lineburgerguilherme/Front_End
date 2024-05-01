import React, { useState } from 'react';
import Header from './componets/Header';
import Input from './componets/Input';
import Formulario from './componets/Forms';
import Button from './componets/Button';
import Coordenador from './componets/Coordenador';


const App = () => {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <div>
      <Header titulo="Meu App" />
      <Formulario onSubmit={handleSubmit}>
        <Input tipo="text" placeholder="Digite seu nome" value={nome} onChange={handleChange} />
        <Button texto="Enviar" />
      </Formulario>
      <Coordenador> Seu nome é <Input tipo="text" placeholder="Digite seu nome" value={nome} onChange={handleChange} /> </Coordenador>
    </div>
  );
};


export default App;
