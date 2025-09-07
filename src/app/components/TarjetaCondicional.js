export default function TarjetaCondicional({ titulo, contenido, activo }) {
  const estilos = {
    backgroundColor: activo ? "#2ecc71" : "#e74c3c", // verde si activo, rojo si no
    color: activo ? "#fff" : "#000",                 // texto blanco si activo, negro si no
    padding: "16px",
    margin: "16px auto",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
    transform: activo ? "scale(1.05)" : "scale(1)", // efecto visual dinámico
    transition: "all 0.3s ease"
  };

  return (
    <div style={estilos}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      <p><strong>{activo ? " Activo" : " Inactivo"}</strong></p>
    </div>
  );
}
