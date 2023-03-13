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
            mensualidad: subscription.toLocaleString(),
            expiration: endSubs.toLocaleString(),
            active: true,
          });
          const savedUser = await newUSer.save();
          console.log("savedUser", savedUser.expiration);
          res.status(201).json(savedUser);
        }
      } catch (error) {
        console.log(error);
      }
  }
};
