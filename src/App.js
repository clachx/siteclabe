import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Routes/About.js';
// import Catalog from './Catalog.js';
import Home from './Routes/Home.js';
import Desenhos from './Routes/Desenhos.js';
import Mapas from './Routes/Mapas.js';
import Sobre from './Routes/Sobre.js';
import Encomendas from './Routes/Encomendas.js';
// import './style.css';
// import { BsMap } from "react-icons/bs";
// import { BsPencil } from "react-icons/bs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/desenhos" element={<Desenhos/>} />
        <Route path="/mapas" element={<Mapas/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/encomendas" element={<Encomendas/>} /> 
      </Routes>
    </Router>
  );
}




export default App;







// // function sayHello() {
//   alert('Jesuíno é lindo');
// }

// <main className="main">
// <button className="buttonSearch"  onClick={sayHello}>
// <h2> ARQUITETURA <HiBuildingOffice2 color="F23064"/> </h2>
//         </button>
         



// < a href = "https://www.instagram.com/a.clabe/" >
//   <button className="buttonSearch"> <IoLogoInstagram size={40} color="F23064"/> </button>   
// </ a >

// <ul className="hamburger-panel-list" data-store="navigation" data-component="menu">
//                                      <li class="hamburger-panel-item" data-component="menu.item">
//                  </li>
//                                      <li class="hamburger-panel-item" data-component="menu.item">
//                 <a class="hamburger-panel-link" href="/produtos/">
//                     Produtos
//                 </a>
//              </li>
//             </ul>

//             <div class="barra-inicial fundo-secundario">
//   <div class="conteiner">
//     <div class="row-fluid">
      