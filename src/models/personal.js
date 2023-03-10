import { Schema, model, models } from "mongoose";

const personalSchema = new Schema(
  {
    name: {
      type: String,
      requied: [true, "name is required"],
      unique: true,
      trim: true,
    },
    password: { type: String, requied: [true, "password is required"] },
    arriveTime: { type: Date },
    leaveTime: { type: Date },
  },
  { timestamps: true }
);

export default models.personal || model("personal", personalSchema);
