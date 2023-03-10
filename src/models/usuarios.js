import { Schema, model, models } from "mongoose";

new Schema({
  name: {
    type: String,
    requied: [true, "name is required"],
    unique: true,
    trim: true,
  },
  mensualidad: { type: Date, rquired: true },
  active: { type: Boolean },
});
