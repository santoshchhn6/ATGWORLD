import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { showCreateAccount: false, showSignIn: false },
  reducers: {
    setShowCreateAccount(state, action) {
      state.showCreateAccount = action.payload;
    },
    setShowSignIn(state, action) {
      state.showSignIn = action.payload;
    },
  },
});

export const { setShowCreateAccount, setShowSignIn } = appSlice.actions;
export default appSlice;
