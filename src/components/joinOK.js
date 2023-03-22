import Link from "next/link";

export default function joinOK() {
  return (
    <div className="alert">
      <div className="hijo2">
        <Link href={"/"}>
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header">Hora de entrada registrada</div>
            <div className="card-body">
              <h4 className="card-title">Aceptar</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
