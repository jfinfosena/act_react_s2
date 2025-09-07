import TarjetaModulo from "./components/TarjetaModulo";

export default function Home() {
  return (
    <main>
      <TarjetaModulo
        nombre="Aprendiendo CSS Modules"
        descripcion="Este componente utiliza estilos aislados con CSS Modules para evitar conflictos globales."
        categoria="Frontend"
      />

      <TarjetaModulo
        nombre="Ejercicio 2.1"
        descripcion="Aquí probamos transiciones suaves en hover y estilos únicos por clase."
        categoria="Práctica"
      />
    </main>
  );
}
