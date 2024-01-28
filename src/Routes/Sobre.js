// Sobre.js
import React from 'react';
import Header from '../Componentes/Header.js'
import Footer from '../Componentes/Footer.js';

const Sobre = () => {
  return (
    <div>
      <Header />
      <div className="sobre-container">
      <div className="imagem-container">
        <img src="/caminho/para/sua/imagem.jpg" alt="Imagem Sobre" />
      </div>
      <div className="texto-container">
        <h2>Conheça mais sobre nós</h2>
        <p>
          Seu texto sobre a empresa, projetos, ou qualquer conteúdo que você deseja destacar na página "Sobre".
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Sobre;
