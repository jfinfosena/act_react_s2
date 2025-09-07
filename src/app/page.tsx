import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaCondicional from "./components/TarjetaCondicional";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="p-8 space-y-12">
      {/* Estilos Globales */}
      <section>
        <h1 className="text-2xl font-bold mb-4">🎨 Estilos Globales (globals.css)</h1>
        <TarjetaGlobal
          titulo="Tarjeta Global"
          contenido="Esta tarjeta usa clases definidas en globals.css"
          color="azul"
        />
      </section>

      {/* CSS Modules */}
      <section>
        <h1 className="text-2xl font-bold mb-4">📦 CSS Modules</h1>
        <TarjetaModulo
          nombre="Tarjeta con Módulos"
          descripcion="Usa estilos locales únicos con .module.css"
          categoria="Ejemplo"
        />
      </section>

      {/* Estilos en Línea */}
      <section>
        <h1 className="text-2xl font-bold mb-4">🖌️ Estilos en Línea</h1>
        <TarjetaDinamica
          titulo="Tarjeta Dinámica"
          contenido="Los colores y el ancho cambian según props"
          colorFondo="#9b59b6"
          colorTexto="#fff"
          ancho="300px"
        />

        <TarjetaCondicional
          titulo="Tarjeta Condicional Activa"
          contenido="Su diseño cambia dependiendo del estado activo"
          activo={true}
        />
      </section>

      {/* Tailwind CSS */}
      <section>
        <h1 className="text-2xl font-bold mb-4">⚡ Tailwind CSS</h1>
        <TarjetaTailwind
          titulo="Tarjeta con Tailwind"
          descripcion="Estilos modernos aplicados con clases utilitarias."
          imagen="https://via.placeholder.com/300x200"
          etiqueta="Framework"
        />
      </section>
    </main>
  );
}
