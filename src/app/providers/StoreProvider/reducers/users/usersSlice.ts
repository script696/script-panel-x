import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsersThunk } from "./usersThunk";
import { UsersViewModel } from "./types/typedef";

export type UserState = {
  usersData: { users: Array<UsersViewModel>; total: number };
  usersTable: {
    pagination: { page: number; rowsPerPage: number };
    selectedRows: Array<string>;
  };
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  usersData: {
    users: [{ id: "1", nickname: "Script", shopName: "Script shop" }],
    total: 1,
  },
  usersTable: {
    pagination: { page: 0, rowsPerPage: 6 },
    selectedRows: [],
  },
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: {
    /* Refresh image */

    [getUsersThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.usersData = { users: [], total: 0 };
    },
    [getUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsersThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
