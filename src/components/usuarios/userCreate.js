import { useState } from "react";
import axios from "axios";
import PersonalOk from "../empleados/personalOK";

export default function UserCreate() {
  const [input, setInput] = useState({ name: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    location.reload();
  };

  let handleChange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      return newInput;
    });
  };

  const POSTUSer = async function (input) {
    try {
      await axios({
        url: "/api/users",
        method: "POST",
        data: input,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    POSTUSer(input);
    console.log("input", input);
    setInput({ name: "" });
    setShow(true);
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <div className="input-group mb-3">
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Nombre del usuario"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="name"
              value={input.name}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Registrar
            </button>
          </div>
        </div>
      </form>
      <div>
        {show === true ? (
          <PersonalOk
            handleClose={handleClose}
            target={"usuario"}
            accion={"Registrado"}
          />
        ) : null}
      </div>
    </div>
  );
}
