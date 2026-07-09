import React from 'react';
import './lista.css';

function Lista() {
  return (
    <div class="catalog">
      <article class="tarjeta">
        <h3>Título1</h3>
        <p>Autor1</p>
        <span>Género1</span>
      </article>

  <article class="tarjeta">
    <h3>Título2</h3>
    <p>Autor2</p>
    <span>Género2</span>
  </article>

  <article class="tarjeta">
    <h3>Título3</h3>
    <p>Autor3</p>
    <span>Género3</span>
  </article>
</div>
  );
}

export default Lista;