export default function Checks({ name, entradas, salidas }) {
  console.log("arraySalidas", salidas);

  const spanEntradas = entradas.map((elemento, index) => (
    <span key={index}>
      {elemento} <br></br>
    </span>
  ));

  const spanSalidas = salidas.map((elemento, index) => (
    <span className="" key={index}>
      {elemento} <br></br>
    </span>
  ));

  return (
    <div className="cartas">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Empleado: </h4>
          <h6 className="card-subtitle mb-2 text-muted"> {name}</h6>
          <p className="card-text">Historial de entradas:</p>
          <div className="table-success">{spanEntradas}</div>
          <br></br>
          <p className="card-text">Historial de salidas:</p>
          <div className="table-success">{spanSalidas}</div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
