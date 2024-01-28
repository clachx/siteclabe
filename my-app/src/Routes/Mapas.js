import React from 'react';
import Catalog from '../Catalog.js';
import produtos from '../Componentes/produtos';
import Header from '../Componentes/Header.js'
import Footer from '../Componentes/Footer.js'
import Map from '../Componentes/Map.js'



function Mapas() {
  // Filtrar os produtos para Mapas
  const mapas = produtos.filter((quadro) => quadro.categoria === 'Mapas');

  return (
    <div>
    <Header />
    <Map />
    <Catalog produtos={mapas} categoria={'Mapas'} />
    <Footer />
    </div>
  );
}

export default Mapas;
