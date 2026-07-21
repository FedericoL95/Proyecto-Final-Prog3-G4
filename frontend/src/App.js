import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/layout';
// (quizas haya que cambiar el header en app.css para que funcione con el layout principal)
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a tu nueva aplicación!</h1>
        <p>Frontend React funcionando correctamente</p>
        <p>
          <a href="/api/health" target="_blank" rel="noopener noreferrer">
            Verificar estado de la API
          </a>
        </p>
      </header>
    </div>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
