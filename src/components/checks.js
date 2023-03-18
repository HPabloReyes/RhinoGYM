export default function Checks({ name, entradas, salidas }) {
  console.log("arraySalidas", salidas);

  const spanEntradas = entradas.map((elemento, index) => (
    <span key={index}>
      {elemento} <br></br>
    </span>
  ));

  const spanSalidas = salidas.map((elemento, index) => (
    <span key={index}>
      {elemento} <br></br>
    </span>
  ));

  return (
    <div>
      <p>Empleado: {name}</p>
      <p>Entradas: </p>
      <div>{spanEntradas}</div>
      <br></br>
      <p>Salidas: </p>
      <div>{spanSalidas}</div>
      <br></br>
    </div>
  );
}
