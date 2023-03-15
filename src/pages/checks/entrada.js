import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chargePersonal } from "../../redux/rhinoSlice";
import PersonalCard from "../../components/personalCard";

export default function Entrada() {
  const personal = useSelector((state) => state.admin.personal);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get("/api/employes");
    dispatch(chargePersonal(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contenedor-principal">
      {personal.map((p) => {
        return <PersonalCard key={p._id} name={p.name} />;
      })}
    </div>
  );
}
