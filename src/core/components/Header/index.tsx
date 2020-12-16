import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
    <header>
      <Link to="/" className="no-decoration">
        <h4 className="header-text">Bootcamp DevSuperior</h4>
      </Link>
    </header>
);

export default Header;
