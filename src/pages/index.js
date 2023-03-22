import { useSelector } from "react-redux";

export default function Index() {
  const globalState = useSelector((state) => state.admin);
  console.log("Estado", globalState);
  return (
    <div className="margin1">
      <h1>Minimo producto Viable - Rhino GYM</h1>
      <p>
        Bienvenido lo que usted se encuentra viendo no es más que una mínima
        muestra de un producto o servicio, el producto final no se limita a las
        funciones presentadas en esta demo y tampoco tiene restricción alguna en
        cuanto a diseño, si usted desea adquirir el producto completo siéntase
        libre de añadir las funcionalidades o diseño con las que se sienta
        cómodo
      </p>
    </div>
  );
}
