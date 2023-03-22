import { useDispatch, useSelector } from "react-redux";
import { chargeDetailsUser } from "../../redux/rhinoSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PersonalOk from "../../components/personalOK";
import axios from "axios";

export default function () {
  const router = useRouter();
  const { id } = router.query;

  const usuario = useSelector((state) => state.admin.userDetail);
  //console.log(usuario);
  const end = usuario.expirationTrue;
  const end2 = usuario.expiration;

  //#region Este codigo actualiza la informacion del mes añadiendo 30 dias
  const objetoFechaExpiracion = new Date(end2);
  const fechaNueva = new Date(objetoFechaExpiracion);
  fechaNueva.setDate(objetoFechaExpiracion.getDate() + 30);

  const expiration = fechaNueva;
  const expirationTrue = fechaNueva.getTime();
  const expirationMX = fechaNueva.toLocaleString();

  // console.log(expiration);
  // console.log(expirationTrue);
  // console.log(expirationMX);
  //#endregion
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    location.reload();
  };

  const dispatch = useDispatch();
  const today = new Date();
  const pruebaday = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  ); // Restar un mes a la fecha actual

  const fetchData = async () => {
    const response = await axios.get(`/api/users/${id}`);
    dispatch(chargeDetailsUser(response.data));
  };

  useEffect(() => {
    if (router.isReady) {
      fetchData();
    }
  }, [id]);

  const updateMonth = async () => {
    setShow(true);
    try {
      console.log("agregando 30 dias");

      await axios({
        url: `/api/meses/${id}`,
        method: "PUT",
        data: {
          expiration: expiration,
          expirationTrue: expirationTrue,
          expirationMX: expirationMX,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <h3 className="card-body">
        Aqui vemos renderizada una tarjeta con la informacion del usuario
      </h3>

      <div>
        <div className="card mb-3">
          <h3 className="card-header">{usuario.name}</h3>
          <div className="card-body">
            <h5 className="card-title">Status del usuario</h5>
            <h6 className="card-subtitle text-muted">
              {today <= end ? (
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
            <a className="card-link" onClick={updateMonth}>
              Agregar 30 dias
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <div>
        {show === true ? (
          <PersonalOk
            handleClose={handleClose}
            target={"usuario"}
            accion={"actualizado"}
          />
        ) : null}
      </div>
    </div>
  );
}
