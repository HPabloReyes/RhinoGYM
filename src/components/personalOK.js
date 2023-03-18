export default function PersonalOk(props, { target }) {
  const handleButon = () => {
    props.handleClose();
  };

  return (
    <div className="hijo2" onClick={handleButon}>
      <div className="card border-danger mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">{target} Registrado</div>
        <div className="card-body">
          <h4 className="card-title">Aceptar</h4>
        </div>
      </div>
    </div>
  );
}