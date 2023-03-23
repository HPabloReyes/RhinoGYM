export default function PersonalOk(props, { target, accion }) {
  const handleButon = () => {
    props.handleClose();
  };

  return (
    <div className="hijo2">
      <div className="" onClick={handleButon}>
        <div className="card border-danger mb-3" style={{ maxWidth: "20rem" }}>
          <div className="card-header">
            {target} {accion}
          </div>
          <div className="card-body">
            <h4 className="card-title">Aceptar</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
