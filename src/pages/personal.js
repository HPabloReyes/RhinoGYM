import Link from "next/link";
import PersonalCreate from "../components/personalCreate";

export default function Personal() {
  return (
    <div className="fullscreen">
      <div>
        <h3>Registrar personal</h3>
        <div className="form1">
          <PersonalCreate />
        </div>
      </div>
      <Link href={"checks/entrada"} className="margin-right">
        <div className="btn btn-danger" type="button" id="button-addon2">
          Checar entrada
        </div>
      </Link>
      <Link href={"checks/salida"}>
        <div className="btn btn-danger" type="button" id="button-addon2">
          Checar Salida
        </div>
      </Link>
    </div>
  );
}
