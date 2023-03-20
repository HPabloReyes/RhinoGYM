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
    expirationTrue: { type: Number },
    active: { type: Boolean },
    imagen: {
      type: String,
      default:
        "https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_2560%2Cc_limit/pesas.jpg",
    },
  },
  { timestamps: true }
);

export default models.usuarios || model("usuarios", usuariosSchema);
