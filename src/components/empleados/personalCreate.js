import { useState } from "react";
import axios from "axios";
import PersonalOk from "./personalOK";

export default function PersonalCreate() {
  const [input, setInput] = useState({ name: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
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

  const POSTEmploye = async function (input) {
    try {
      await axios({
        url: "/api/employes",
        method: "POST",
        data: input,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    POSTEmploye(input);
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
              placeholder="Nombre del empleado"
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
      <div className={show === true ? "alert" : ""}>
        {show === true ? (
          <PersonalOk handleClose={handleClose} target={"personal"} />
        ) : null}
      </div>
    </div>
  );
}
