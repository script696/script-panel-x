import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuthThunk, logoutThunk, signInThunk } from "./authThunk";

export type UserState = {
  isAuth: boolean;
  isChecked: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  isAuth: false,
  isChecked: false,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },

  extraReducers: {
    /*Check Auth*/

    [checkAuthThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.isChecked = true;
    },
    [checkAuthThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuthThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
      state.isChecked = true;
    },

    /*Sign In*/

    [signInThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.isChecked = true;
    },
    [signInThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
      state.isChecked = true;
    },
    /* Logout */

    [logoutThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = false;
    },
    [logoutThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logoutThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
