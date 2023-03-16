import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checador: [],
  personal: [],
  usuarios: [],
};

export const rhinoSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    chargePersonal: (state, action) => {
      state.personal = action.payload;
    },
    chargeControl: (state, action) => {
      state.checador = action.payload;
    },
  },
});

export const { chargePersonal, chargeControl } = rhinoSlice.actions;
export default rhinoSlice.reducer;
