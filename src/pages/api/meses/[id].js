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
    case "PUT":
      try {
        const expiration = body.expiration;
        const expirationTrue = body.expirationTrue;
        const expirationMX = body.expirationMX;

        const update = {
          expiration: expiration,
          expirationTrue: expirationTrue,
          expirationMX: expirationMX,
        };
        const updatedUser = await usuarios.findByIdAndUpdate(id, update, {
          new: true,
        });
        if (!updatedUser) res.status(404).json({ msg: "User not found" });
        res.status(200).json(updatedUser);
      } catch (error) {
        console.log(error);
      }
  }
};
