export default function Checks({ name, entradas, salidas }) {
  return (
    <div>
      <p>Empleado: {name}</p>
      <p>Entradas: </p>
      {entradas}
      <p>Salidas: </p>
      {salidas}
    </div>
  );
}
