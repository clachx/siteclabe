import React from 'react';
import Catalog from '../Catalog.js';
import '../App.css';
import '../Catalog.css';
import produtos from '../Componentes/produtos.js'
import Header from '../Componentes/Header.js'
import Footer from '../Componentes/Footer.js'


//
function About() {
  return (
    <div>
    <Header />
    <Catalog produtos={produtos} />
    <Footer />
    </div>
  );
      }




export default About;