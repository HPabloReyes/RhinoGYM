import dbConnect from "../../../confing/mongoose";
import personal from "../../../models/personal";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      const employes = await personal.find();
      //console.log("employes", employes);
      res.status(200).json(employes);

    case "POST":
      res.status(200).json(body);

    default:
      return res.status(400).json({ msg: "this method is not suported" });
  }
}
