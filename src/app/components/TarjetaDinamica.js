export default function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho }) {
  const estilos = {
    backgroundColor: colorFondo, 
    color: colorTexto,           
    width: ancho,                
    padding: "16px",            
    margin: "16px auto",         
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  return (
    <div style={estilos}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}