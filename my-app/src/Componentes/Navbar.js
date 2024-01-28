import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav>
       {/* <div className="submenu"> */}
        <NavLink to="/desenhos">Desenhos</NavLink>
        <NavLink to="/mapas">Mapas</NavLink>
      <NavLink to="/about">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/encomendas">Encomendas</NavLink>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;



