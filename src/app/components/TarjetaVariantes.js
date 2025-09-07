import styles from "./TarjetaVariantes.module.css";

export default function TarjetaVariantes({ titulo, descripcion, variante }) {
  // Determinar la clase de la variante
  let varianteClass = "";

  switch (variante) {
    case "primaria":
      varianteClass = styles.tarjetaPrimaria;
      break;
    case "secundaria":
      varianteClass = styles.tarjetaSecundaria;
      break;
    case "exito":
      varianteClass = styles.tarjetaExito;
      break;
    default:
      varianteClass = styles.tarjetaPrimaria; // fallback
  }

  return (
    <div className={`${styles.base} ${varianteClass}`}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}