import dbConnect from "../../../confing/mongoose";
import usuarios from "../../../models/usuarios";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const usuario = await usuarios.findById(id);
        if (!usuario) res.status(404).json({ msg: "User not found" });
        res.status(200).json(usuario);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    default:
      res.status(200).json({ msg: "this method is not suported" });
    case "PUT":
      try {
        const subscription = new Date();
        const endSubs = new Date(
          subscription.getTime() + 30 * 24 * 60 * 60 * 1000
        );

        const update = {
          mensualidad: subscription,
          expiration: endSubs,
          mensualidadMX: subscription.toLocaleString(),
          expirationTrue: endSubs.getTime(),
          expirationMX: endSubs.toLocaleString(),
        };
        const updatedUser = await usuarios.findByIdAndUpdate(id, update, {
          new: true,
        });
        if (!updatedUser) res.status(404).json({ msg: "User not found" });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
};
