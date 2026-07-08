import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

// Queda espacio para el logo de la app junto al título

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
       <h1>Catálogo Personal</h1>
      </div>
        <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/libros">Libros</Link>
        <Link to="/generos">Géneros</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </header>
    );
}
export default Header;