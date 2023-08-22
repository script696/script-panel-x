import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { refreshTokensThunk } from "./userThunk";

export type UserState = {
  user: {
    name: string;
    role: "system-admin" | "admin" | "user";
  } | null;
  isAuth: boolean;
  isLoading: boolean;
  isUserFetched: boolean;
  error: string;
};

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: false,
  isUserFetched: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: {
    /* Refresh image */

    [refreshTokensThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.isUserFetched = true;
      state.user = {
        name: "Script Test",
        role: "system-admin",
      };
    },
    [refreshTokensThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [refreshTokensThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
