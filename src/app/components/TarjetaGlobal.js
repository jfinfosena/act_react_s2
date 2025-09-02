'use client';
import React from 'react';

function TarjetaGlobal({ titulo, contenido, color }) {
  return (
    <div className="tarjeta-global" style={{ backgroundColor: color }}>
      <h2 className="titulo-global">{titulo}</h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}

export default TarjetaGlobal;
