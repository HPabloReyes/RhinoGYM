import dbConnect from "../../../confing/mongoose";
import entradas from "../../../models/checador";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        // Obtener la hora de entrada actual
        const horaEntrada = new Date().toLocaleString();
        // Buscar si el empleado ya existe en la colección `entradas`
        const empleadoExistente = await entradas.findOne({ name: body.name });

        if (empleadoExistente) {
          // Actualizar el registro existente agregando la hora de entrada
          empleadoExistente.entradas.push({ entrada: horaEntrada });
          await empleadoExistente.save();
          res.status(200).json(empleadoExistente);
        } else {
          // Crear un nuevo registro en la colección `entradas`
          const entrada = new entradas({
            name: body.name,
            entradas: [{ entrada: horaEntrada }],
          });
          await entrada.save();
          res.status(200).json(entrada);
        }
      } catch (error) {
        console.log(error);
      }
    case "GET":
      try {
        const allEntradas = await entradas.find();
        res.status(200).json(allEntradas);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
};
