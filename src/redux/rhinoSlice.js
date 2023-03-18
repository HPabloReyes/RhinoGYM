import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checador: [],
  personal: [],
  usuarios: [],
  userDetail: [],
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
    chargeUsers: (state, action) => {
      state.usuarios = action.payload;
    },
    chargeDetailsUser: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { chargePersonal, chargeControl, chargeUsers, chargeDetailsUser } =
  rhinoSlice.actions;
export default rhinoSlice.reducer;
