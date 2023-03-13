import dbConnect from "../../../confing/mongoose";
import personal from "../../../models/personal";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const employes = await personal.find();
        //console.log("employes", employes);
        res.status(200).json(employes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newEmploye = new personal(body);
        const savedEmploye = await newEmploye.save();
        console.log("savedEmploye", savedEmploye);
        res.status(201).json(savedEmploye);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "this method is not suported" });
  }
}
