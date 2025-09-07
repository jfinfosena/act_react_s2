import TarjetaCondicional from "./components/TarjetaCondicional";

export default function Home() {
  return (
    <main>
      <TarjetaCondicional 
        titulo="Usuario 1"
        contenido="Este usuario está activo."
        activo={true}
      />

      <TarjetaCondicional 
        titulo="Usuario 2"
        contenido="Este usuario está inactivo."
        activo={false}
      />
    </main>
  );
}
