import dbConnect from "../../../confing/mongoose";
import personal from "../../../models/personal";

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
        const employe = await personal.findById(id);
        if (!employe) return res.status(404).json({ msg: "Employe not found" });
        return res.status(200).json(employe);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    case "PUT":
      try {
        const updatedEmploye = await personal.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!updatedEmploye)
          return res.status(404).json({ msg: "Employe not found" });
        return res.status(200).json(updatedEmploye);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    case "DELETE":
      try {
        const deletedEmploye = await personal.findByIdAndDelete(id);
        if (!deletedEmploye)
          return res.status(404).json({ msg: "Employe not found" });
        return res.status(200).json(deletedEmploye);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
};
