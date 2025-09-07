import TarjetaDinamica from "./components/TarjetaDinamica";

export default function Home() {
  return (
    <main>
      <TarjetaDinamica
        titulo="Tarjeta Roja"
        contenido="Este componente usa estilos en línea con props."
        colorFondo="#e74c3c"
        colorTexto="#fff"
        ancho="300px"
      />

      <TarjetaDinamica
        titulo="Tarjeta Azul"
        contenido="Puedes cambiar el color de fondo, texto y ancho fácilmente."
        colorFondo="#3498db"
        colorTexto="#fff"
        ancho="50%"
      />

      <TarjetaDinamica
        titulo="Tarjeta Verde"
        contenido="Los estilos son 100% dinámicos con base en props."
        colorFondo="#2ecc71"
        colorTexto="#000"
        ancho="400px"
      />
    </main>
  );
}