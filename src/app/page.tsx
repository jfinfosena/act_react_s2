import TarjetaVariantes from "./components/TarjetaVariantes";

export default function Home() {
  return (
    <main>
      <TarjetaVariantes
        titulo="Tarjeta Primaria"
        descripcion="Soy una tarjeta con estilo azul (primaria)."
        variante="primaria"
      />

      <TarjetaVariantes
        titulo="Tarjeta Secundaria"
        descripcion="Soy una tarjeta gris oscuro (secundaria)."
        variante="secundaria"
      />

      <TarjetaVariantes
        titulo="Tarjeta de Éxito"
        descripcion="Soy una tarjeta verde (éxito)."
        variante="exito"
      />
    </main>
  );
}
