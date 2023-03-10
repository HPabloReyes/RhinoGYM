export default function PersonalCreate() {
  return (
    <div>
      <form>
        <div className="form-group">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="jonh Doe"
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Constraseña</label>
          </div>
        </div>
      </form>
    </div>
  );
}
