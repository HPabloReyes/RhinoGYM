import { useDispatch, useSelector } from "react-redux";
import { chargeDetailsUser } from "../../redux/rhinoSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function () {
  const router = useRouter();
  const { id } = router.query;

  const usuario = useSelector((state) => state.admin.userDetail);
  //console.log(usuario);
  const end = usuario.expirationTrue;

  const dispatch = useDispatch();
  const today = new Date();
  const pruebaday = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  ); // Restar un mes a la fecha actual
  console.log("prueba", pruebaday);
  console.log("expiracion", usuario.expirationMX);
  //console.log("today", today);
  //console.log("usuario", end);

  const fetchData = async () => {
    const response = await axios.get(`/api/users/${id}`);
    dispatch(chargeDetailsUser(response.data));
  };

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [id]);

  const handleMonth = async () => {
    console.log(id);
    try {
      await axios({
        url: `/api/users/${id}`,
        method: "PUT",
        data: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor-principal">
      <h1>Estos son los detalles del usuario {id}</h1>
      <div>
        <div className="card mb-3">
          <h3 className="card-header">{usuario.name}</h3>
          <div className="card-body">
            <h5 className="card-title">Status del usuario</h5>
            <h6 className="card-subtitle text-muted">
              {today.getTime() <= end ? (
                <p className="text-success">Usuario activo</p>
              ) : (
                <p className="text-danger">Suscripcion expirada</p>
              )}
            </h6>
          </div>
          <div>
            <img src={usuario.imagen} className={"usuario-imagen"}></img>
          </div>
          <div className="card-body">
            <p className="card-text">
              En esta parte podrian ser agregados algunos datos de relevancia,
              como telefonos de contacto correo ETC
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Inscrito: {usuario.mensualidadMX}
            </li>
            <li className="list-group-item">
              Ultimo día: {usuario.expirationMX}
            </li>
            <li className="list-group-item">Otro dato: ****</li>
          </ul>
          <div className="card-body">
            {today.getTime() > end ? (
              <a className="card-link" onClick={handleMonth}>
                Renovar Suscripcion
              </a>
            ) : (
              <p className="text-success">Usuario activo</p>
            )}
            <a href="#" className="card-link">
              Agregar 30 dias
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </div>
  );
}
