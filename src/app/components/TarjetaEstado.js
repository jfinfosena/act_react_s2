'use client';
import React from 'react';

function TarjetaEstado({ titulo, contenido, activo }) {
  const estilos = {
    backgroundColor: activo ? '#c8e6c9' : '#ffcdd2', // verde si activo, rojo si no
    color: activo ? '#1b5e20' : '#b71c1c',
    border: '2px solid',
    borderColor: activo ? '#388e3c' : '#d32f2f',
    padding: '1rem',
    margin: '1rem auto',
    width: '70%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={estilos}>
      <h2 style={{ marginBottom: '0.5rem' }}>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}

export default TarjetaEstado;
