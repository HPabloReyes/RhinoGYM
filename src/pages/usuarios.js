import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { chargeUsers } from "../redux/rhinoSlice";
import UserCard from "../components/usuarios/userCard";
import UserCreate from "../components/usuarios/userCreate";
import axios from "axios";

export default function Usuarios() {
  const usuarios = useSelector((state) => state.admin.usuarios);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get("/api/users");
    dispatch(chargeUsers(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>
        En esta pagina vamos a renderizar una lista de los usuarios de las 3
        sucursales para comprobar si tienen acceso
      </h3>
      <div>
        <UserCreate />
      </div>
      <div className="contenedor-principal">
        {usuarios.length < 1 ? (
          <img src="carga.gif"></img>
        ) : (
          usuarios.map((u) => {
            return (
              <UserCard
                id={u._id}
                key={u._id}
                name={u.name}
                inscrito={u.mensualidadMX}
                expiracion={u.expirationMX}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
