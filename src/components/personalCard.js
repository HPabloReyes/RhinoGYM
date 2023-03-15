export default function PersonalCard({ name }) {
  return (
    <div className="cartas">
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "15rem" }}
      >
        <div className="card-header">{name}</div>
        <div className="card-body">
          <h4 className="card-title">Registrar Entrada</h4>
        </div>
      </div>
    </div>
  );
}
