'use client';
import React from 'react';
import styles from './TarjetaModulo.module.css';
import clsx from 'clsx'; // Si no lo tienes, instala con: npm install clsx

function TarjetaModulo({ nombre, descripcion, variante = 'Primaria' }) {
  const claseVariante = styles[`tarjeta${variante}`]; // Ej: styles.tarjetaPrimaria

  return (
    <div className={clsx(styles.tarjeta, claseVariante)}>
      <h2 className={styles.titulo}>{nombre}</h2>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}

export default TarjetaModulo;

