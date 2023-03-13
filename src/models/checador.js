import { Schema, model, models } from "mongoose";

const checadorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
      trim: true,
    },
    entradas: { type: Array, default: [] },
    salidas: { type: Array, default: [], required: true },
  },
  { timestamps: true }
);

export default models.checador || model("checador", checadorSchema);
