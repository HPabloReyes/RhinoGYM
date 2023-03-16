import Link from "next/link";

export default function LeavOK() {
  return (
    <div className="alert">
      <div className="hijo">
        <Link href={"/"}>
          <div
            className="card border-danger mb-3"
            style={{ maxWidth: "20rem" }}
          >
            <div className="card-header">Hora de salida registrada</div>
            <div className="card-body">
              <h4 className="card-title">Aceptar</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
