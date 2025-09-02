'use client';
import React from 'react';

function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho }) {
  const estilos = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: '1rem',
    margin: '1rem auto',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  };

  return (
    <div style={estilos}>
      <h2 style={{ marginBottom: '0.5rem' }}>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}

export default TarjetaDinamica;
