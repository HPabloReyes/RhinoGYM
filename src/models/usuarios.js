import { Schema, model, models } from "mongoose";

const usuariosSchema = new Schema(
  {
    name: {
      type: String,
      requied: [true, "name is required"],
      unique: true,
      trim: true,
    },
    mensualidad: { type: Date, requied: true },
    expiration: { type: Date, requied: true },
    mensualidadMX: { type: String },
    expirationMX: { type: String },
    active: { type: Boolean },
  },
  { timestamps: true }
);

export default models.usuarios || model("usuarios", usuariosSchema);
