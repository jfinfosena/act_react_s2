'use client';
import React from 'react';

function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}
      <span className="text-sm font-semibold text-gray-500 mb-1">{etiqueta}</span>
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="text-sm leading-relaxed">{descripcion}</p>
    </div>
  );
}

export default TarjetaTailwind;
