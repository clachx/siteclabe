import React from "react";
import './style.css';
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoLogoInstagram } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import logo from './logo.png';
import cena_copan_desenho_abril from './cena_copan_desenho_abril.jpeg';
import cena_onibus_desenho_abril from './cena_onibus_desenho_abril.jpeg';

function sayHello() {
  alert('Jesuíno é lindo');
}


function App() {
  return (
   
    <div className="container" style={{ textAlign: 'center' }}>
    <h1 className="title"> 
        <div>
            <img src={require('./logo.png')} alt="logo" />
        </div>
    </h1>

<div className="containerInput">
  
         </div>

<main className="main">
<button className="buttonSearch"  onClick={sayHello}>
<h2> ARQUITETURA <HiBuildingOffice2 color="F23064"/> </h2>
        </button>
        

<button className="buttonSearch"  onClick={sayHello}>
<h2> CINEMA <BiCameraMovie color="F23064"/> </h2>
</button>


<button className="buttonSearch"  onClick={sayHello}>
<h3> DESENHOS <BsPencil color="F23064"/> </h3>
</button>

<button className="buttonSearch"  onClick={sayHello}>
<h3> MAPAS <BsMap color="F23064"/> </h3>
</button>


</main>

<div>
        <img src={require('./cena_copan_desenho_abril.jpeg')} alt="cena1" />
 </div>

 <div>
        <img src={require('./cena_onibus_desenho_abril.jpeg')} alt="cena1" />
 </div>
    



< a href = "https://www.instagram.com/a.clabe/" >
  <button className="buttonSearch"> <IoLogoInstagram size={40} color="F23064"/> </button>   
</ a >

<ul className="hamburger-panel-list" data-store="navigation" data-component="menu">
                                     <li class="hamburger-panel-item" data-component="menu.item">
                 </li>
                                     <li class="hamburger-panel-item" data-component="menu.item">
                <a class="hamburger-panel-link" href="/produtos/">
                    Produtos
                </a>
             </li>
            </ul>

            <div class="barra-inicial fundo-secundario">
  <div class="conteiner">
    <div class="row-fluid">
      
      <div class="canais-contato span9">
        <ul>
                   
            <li>
              <span>
                <i class="icon-phone"></i>Whatsapp: (11) 94969-4900
              </span>
            </li>
          
          
            <li class="tel-whatsapp">
              <span>
                <i class="fa fa-whatsapp"></i>E-mail: clacx@hotmail.com
              </span>
            </li>
          
          
        </ul>
      </div>
    </div>
  </div>
</div>
	
</div>



  );
}


export default App;