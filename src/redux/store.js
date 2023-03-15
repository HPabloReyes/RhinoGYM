import { configureStore } from "@reduxjs/toolkit";
import rhinoReducer from "./rhinoSlice";

export const store = configureStore({
  reducer: {
    admin: rhinoReducer,
  },
});
