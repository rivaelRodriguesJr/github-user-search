import React from 'react';
import Button from '../../core/components/Button';

import './styles.scss';

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-box">
        <h1 className="search-title">Encontre um perfil Github</h1> 
        <input 
          type="text" 
          className="search-input" 
          placeholder="Usuário Github" 
        />
        <div className="search-button-container">
          <Button content="Encontrar"/>
        </div>
      </div>
    </div>
  );
}

export default Search;