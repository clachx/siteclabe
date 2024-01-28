import React from 'react';
import Header from '../Componentes/Header.js'
import Footer from '../Componentes/Footer.js';

function Home() {
  return (
   <div>
        <Header />
        <img src={require('../cena_copan_desenho_abril.jpeg')} alt="cena1" className="image" />
        <Footer />
 </div>
 
  );
}

export default Home;
