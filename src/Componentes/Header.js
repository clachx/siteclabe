import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
// import SearchBar from '../Componentes/SearchBar.js';


const Header = () => {
  return (
  <header className="header">
      {/* Link the logo to the home route */}
      <Link to="/">
        <img src="/produtos/logo.png" alt="Logo" className="logo" />
      </Link>

      <Navbar />
      <div class="contato">
      < a href = "https://www.instagram.com/a.clabe/" >
   <button className="buttonSearch"> <IoLogoInstagram size={40} color="F23064"/> </button>   
 </ a >
 <a href="https://wa.me/message/PR3XFY5A7RZDC1">
          <button className="buttonSearch">
            <BsWhatsapp size={40} color="F23064" />
          </button>
        </a>
        {/* <SearchBar /> */}
         </div>
    </header>
  );
}



export default Header;

