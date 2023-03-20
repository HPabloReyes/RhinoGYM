import dbConnect from "../../../confing/mongoose";
import usuarios from "../../../models/usuarios";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        const usuario = await usuarios.findOne({ name: body.name });

        if (usuario) {
          res
            .status(400)
            .json({ msj: "El usuario ya fue registrado con anteriormente" });
        } else {
          const subscription = new Date();
          const endSubs = new Date(
            subscription.getTime() + 30 * 24 * 60 * 60 * 1000
          );

          const newUSer = new usuarios({
            name: body.name,
            mensualidad: subscription,
            expiration: endSubs,
            mensualidadMX: subscription.toLocaleString(),
            expirationMX: endSubs.toLocaleString(),
            expirationTrue: endSubs.getTime(),
            active: true,
          });
          const savedUser = await newUSer.save();
          console.log("savedUser", savedUser.expiration);
          res.status(201).json(savedUser);
        }
      } catch (error) {
        console.log(error);
      }
    case "GET":
      try {
        const allUsers = await usuarios.find();
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
};
