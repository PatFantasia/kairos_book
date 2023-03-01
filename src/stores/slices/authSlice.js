import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      username: " ",
      password: " ",
      confirmPassword: " ",
      phoneNumber: null,
      validationCode: null,
    },
    isLogged: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setUser, setAuth } = authSlice.actions;
export const selectUser = (state) => state.user;

export default authSlice.reducer;
