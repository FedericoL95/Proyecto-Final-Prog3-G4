import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <header className="App-header">
          <h1>¡Bienvenido a tu nueva aplicación!</h1>
          <p>Frontend React funcionando correctamente</p>
          <p>
            <a href="/api/health" target="_blank" rel="noopener noreferrer">
              Verificar estado de la API
            </a>
          </p>
        </header>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
