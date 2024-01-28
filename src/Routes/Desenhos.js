import React from 'react';
import Catalog from '../Catalog.js';
import produtos from '../Componentes/produtos';
import Header from '../Componentes/Header.js'
import Footer from '../Componentes/Footer.js'



function Desenhos() {
  // Filtrar os produtos para Mapas
  const desenhos = produtos.filter((quadro) => quadro.categoria === 'Desenhos');

  return (
    <div className="app">
      <Header />
      <Catalog produtos={desenhos} categoria={'Desenhos'} />
      <Footer />
    </div>
  );
}

export default Desenhos;