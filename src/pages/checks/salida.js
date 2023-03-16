import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chargePersonal } from "../../redux/rhinoSlice";
import PersonalSalidaCard from "../../components/personalSalidaCard";
import LeavOK from "../../components/leaveOK";

export default function Salida() {
  const personal = useSelector((state) => state.admin.personal);

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get("/api/employes");
    dispatch(chargePersonal(response.data));
  };

  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contenedor-principal" onClick={handleClick}>
      {personal.map((p) => {
        return <PersonalSalidaCard key={p._id} name={p.name} />;
      })}
      <div>{show === true ? <LeavOK /> : null}</div>
    </div>
  );
}
