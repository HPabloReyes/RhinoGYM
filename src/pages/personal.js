import PersonalCreate from "../components/personalCreate";

export default function Personal() {
  return (
    <div>
      <p>
        En esta ventana renderizaremos algun boton que permita al usuario
        registrar su hora de entrada y hora de salida
      </p>
      <div>
        <p>agregar personal</p>
        <div className="form1">
          <PersonalCreate />
        </div>
      </div>
      <p>Checar entrada / salida</p>
    </div>
  );
}
