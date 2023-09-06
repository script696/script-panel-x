import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserThunk } from "./userThunk";
import { UserViewModel } from "./types/typedef";
import { GetUserDto } from "shared/api/users/dto/GetUserDto";

export type UserState = {
  user: UserViewModel | null;
  isUserFetched: boolean;
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  user: null,
  isUserFetched: false,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: {
    /* Get User */

    [getUserThunk.fulfilled.type]: (state, { payload }: PayloadAction<GetUserDto>) => {
      state.isLoading = false;
      state.error = "";
      state.user = payload;
      state.isUserFetched = true;
    },
    [getUserThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUserThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
      state.isUserFetched = true;
    },
  },
});

export default userSlice.reducer;
