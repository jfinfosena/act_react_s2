import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaEstado from './components/TarjetaEstado';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Tarjetas con estilos globales */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Tarjetas con CSS Global</h1>
        <TarjetaGlobal
          titulo="Bienvenido"
          contenido="Esta es una tarjeta estilizada con clases globales."
          color="#f0f8ff"
        />
      </section>

      {/* Tarjetas con CSS Modules */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas con CSS Modules</h2>
        <TarjetaModulo
          nombre="React Básico"
          descripcion="Aprende los fundamentos de React y cómo construir componentes reutilizables."
          variante="Primaria"
        />
        <TarjetaModulo
          nombre="Curso de Node.js"
          descripcion="Domina el backend con Express y APIs REST."
          variante="Secundaria"
        />
        <TarjetaModulo
          nombre="Proyecto Final"
          descripcion="Integra todo lo aprendido en una aplicación completa."
          variante="Exito"
        />
      </section>

      {/* Tarjetas con estilos dinámicos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas con Estilos Dinámicos</h2>
        <TarjetaDinamica
          titulo="Bienvenido a Cinecalidad"
          contenido="Explora películas en alta definición con una interfaz dinámica."
          colorFondo="#1e88e5"
          colorTexto="#ffffff"
          ancho="80%"
        />
        <TarjetaDinamica
          titulo="Backend en Proceso"
          contenido="Estamos integrando Node.js y Express para una experiencia completa."
          colorFondo="#43a047"
          colorTexto="#f1f8e9"
          ancho="60%"
        />
      </section>

      {/* Tarjetas con estado condicional */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas con Estado Condicional</h2>
        <TarjetaEstado
          titulo="Estado Activo"
          contenido="Esta tarjeta está activa y se muestra en verde."
          activo={true}
        />
        <TarjetaEstado
          titulo="Estado Inactivo"
          contenido="Esta tarjeta está inactiva y se muestra en rojo."
          activo={false}
        />
      </section>

      {/* Tarjetas con Tailwind */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas con Tailwind CSS</h2>
        <TarjetaTailwind
          titulo="Película Destacada"
          descripcion="Una historia épica que te mantendrá al borde del asiento."
          imagen="/images/pelicula.jpg"
          etiqueta="Cinecalidad"
        />
        <TarjetaTailwind
          titulo="Curso Express"
          descripcion="Aprende backend con Node.js en tiempo récord."
          imagen="/images/nodejs.jpg"
          etiqueta="Backend"
        />
      </section>
    </main>
  );
}








