export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg w-64 p-4 m-2 transition-all duration-300 hover:shadow-xl">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        {etiqueta}
      </span>
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="text-gray-600 text-sm">{descripcion}</p>
    </div>
  );
}
