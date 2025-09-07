import TarjetaGlobal from "./components/TarjetaGlobal";

export default function Home() {
  return (
    <main>
      <TarjetaGlobal 
        titulo="Mi primera tarjeta"
        contenido="Este es un ejemplo de tarjeta global con estilos desde globals.css"
        color="#4CAF50"
      />

      <TarjetaGlobal 
        titulo="Otra tarjeta"
        contenido="Puedes cambiar el color fácilmente pasando la prop."
        color="#2196F3"
      />
    </main>
  );
}
