import axios from "axios";

export default function PersonalSalidaCard({ name, handleClose }) {
  const data = { name };

  const POSTEntrada = async function (input) {
    try {
      await axios({
        url: "/api/salidas",
        method: "POST",
        data: input,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    POSTEntrada(data);
    handleClose();
    console.log("Salida de ", data);
  };

  return (
    <div className="cartas" onClick={handleClick}>
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "15rem" }}
      >
        <div className="card-header">{name}</div>
        <div className="card-body">
          <h4 className="card-title">Registrar Salida</h4>
        </div>
      </div>
    </div>
  );
}
