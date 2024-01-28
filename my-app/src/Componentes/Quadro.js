import React from 'react';


const Quadro = ({ name, price, price2, description, imageUrl }) => (
  <div className="quadro">
    <img
      src={imageUrl}
      alt={name}
      style={{ maxWidth: '70%', maxHeight: '70%', width: 'auto', height: 'auto' }}
    />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Preço com moldura: R${price}</p>
    <p>Preço sem moldura: R${price2}</p>
  </div>
);

export default Quadro;