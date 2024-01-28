import React from 'react';
import Quadro from './Componentes/Quadro';
import './Catalog.css'; // Importe o arquivo de estilo
// import produtos from './Componentes/produtos.js';

 const Catalog = ({ produtos , categoria = null }) => {

if (categoria === null){
  return(
    <div className="catalog">
      <h2>Todos os Produtos</h2>
      <div className="quadro-container">
        {produtos.map((quadro, index) => (
          <Quadro key={index} {...quadro} />
          ))}
      </div>
    </div>)
  
  }

  else if (categoria === 'Mapas'){
return(
  <div className="section">
  <h2>Mapas</h2>
  <div className="quadro-container">
    {produtos.map((quadro, index) => (
      <Quadro key={index} {...quadro} />
      ))}
  </div>
</div>
);
  }

  else if(categoria === 'Desenhos')
  {
    return(
      <div className="section">
      <h2>Desenhos</h2>
      <div className="quadro-container">
        {produtos.map((quadro, index) => (
          <Quadro key={index} {...quadro} />
          ))}
      </div>
    </div>

    )
  }

  };


export default Catalog;