import Link from "next/link";

export default function UserCard({ name, inscrito, expiracion, id }) {
  return (
    <div className="cartas">
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "15rem" }}
      >
        <Link href={`/userdetail/${id}`}>
          <div className="card-header">{name}</div>
          <div className="card-body">
            <h4 className="card-title">Inscripcion: {inscrito} </h4>
            <h4 className="card-title">Expiracion: {expiracion} </h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
