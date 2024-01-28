// SearchBar.js
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      };
    }
  
    handleSearchChange = (event) => {
      this.setState({ searchTerm: event.target.value });
    };
  
    handleSearchSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode implementar a lógica para realizar a pesquisa com this.state.searchTerm
      // Exemplo: chame uma função de pesquisa passando this.state.searchTerm como argumento
      console.log('Termo de pesquisa:', this.state.searchTerm);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
          <button type="submit">Pesquisar</button>
        </form>
      );
    }
  }

  
  
  export default SearchBar;