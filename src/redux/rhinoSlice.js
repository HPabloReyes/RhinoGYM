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
  },
});

export const { chargePersonal } = rhinoSlice.actions;
export default rhinoSlice.reducer;
