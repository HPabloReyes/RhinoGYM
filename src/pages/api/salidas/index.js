import dbConnect from "../../../confing/mongoose";
import salidas from "../../../models/checador";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        // Obtener la hora de entrada actual
        const horaSalida = new Date().toLocaleString();
        // Buscar si el empleado ya existe en la colección `entradas`
        const empleadoExistente = await salidas.findOne({ name: body.name });

        if (empleadoExistente) {
          // empleadoExistente.salidas = [];
          // Actualizar el registro existente agregando la hora de entrada
          empleadoExistente.salidas.push({ salida: horaSalida });
          await empleadoExistente.save();
          console.log("hay un empleado", empleadoExistente);
          res.status(200).json(empleadoExistente);
        } else {
          // Crear un nuevo registro en la colección `entradas`
          const entrada = new salidas({
            name: body.name,
            salidas: [{ salida: horaSalida }],
          });
          await entrada.save();
          res.status(200).json(entrada);
          console.log("no hay un empleado");
        }
      } catch (error) {
        console.error(error);
      }
    case "GET":
  }
};
