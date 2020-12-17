import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
  <div className="container">
    <h1 className="title">
      Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
    </h1>
    <p className="description">
      Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
    </p>
    <p className="description">
      Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
    </p>
    <p className="description">
      Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="link">antforfigma@gmail.com</span>
    </p>
    <div className="btn-container">
      <Link to="/search" className="no-decoration  ">
        <Button content="Começar" />
      </Link>
    </div>
  </div>
)

export default Home;