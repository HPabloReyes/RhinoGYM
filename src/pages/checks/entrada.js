import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chargePersonal } from "../../redux/rhinoSlice";
import PersonalCard from "../../components/personalCard";
import JoinOK from "../../components/joinOK";

export default function Entrada() {
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
        return <PersonalCard key={p._id} name={p.name} />;
      })}
      <div>{show === true ? <JoinOK /> : null}</div>
    </div>
  );
}
