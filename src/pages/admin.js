import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chargeControl } from "../redux/rhinoSlice";
import axios from "axios";
import Checks from "../components/empleados/checks";
export default function Admin() {
  const control = useSelector((state) => state.admin.checador);
  //console.log("control", control[0].entradas[0].entrada);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get("/api/entradas");
    dispatch(chargeControl(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Esta ventana podria contener un panel de administrador, protegido por
      contraseña, desde el cual consultar toda la informacion pertinente
      <div className="contenedor-principal">
        {control.map((e) => {
          return (
            <Checks
              key={e._id}
              name={e.name}
              entradas={e.entradas.map((e) => e.entrada)}
              salidas={e.salidas.map((e) => e.salida)}
            />
          );
        })}
      </div>
    </div>
  );
}
