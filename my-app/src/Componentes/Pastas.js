// Importe os módulos necessários
import React from 'react';
import About from './Routes/about';


const Desenhos = () => {
  return (
    <About categoria="Desenhos" />
  );
};

const Mapas = () => {
  return (
    <About categoria="Mapas" />
  );
};

export { Desenhos, Mapas };