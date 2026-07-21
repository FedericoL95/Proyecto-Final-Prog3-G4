import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/layout';
import Biblioteca from './pages/Biblioteca';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import './App.css';

function Placeholder({ titulo }) {
  return (
    <div className="page">
      <div className="container">
        <h2 style={{ color: 'var(--secondary)' }}>{titulo}</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Proximamente...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/biblioteca" replace />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<Placeholder titulo="Contacto" />} />
          <Route path="/terminos" element={<Placeholder titulo="Terminos" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
