import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center p-6">
      <TarjetaTailwind
        titulo="Curso Next.js"
        descripcion="Aprende a crear aplicaciones modernas con Next.js y Tailwind CSS."
        imagen="https://via.placeholder.com/300x200"
        etiqueta="Programación"
      />

      <TarjetaTailwind
        titulo="Diseño UI"
        descripcion="Explora los principios básicos del diseño de interfaces modernas."
        imagen="https://via.placeholder.com/300x200"
        etiqueta="Diseño"
      />

      <TarjetaTailwind
        titulo="Productividad"
        descripcion="Descubre trucos y herramientas para mejorar tu productividad."
        imagen="https://via.placeholder.com/300x200"
        etiqueta="Tips"
      />
    </main>
  );
}
