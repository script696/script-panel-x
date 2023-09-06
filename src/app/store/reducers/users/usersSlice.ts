import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserThunk, editUsersThunk, getUsersThunk, removeUsersThunk } from "./usersThunk";
import { UsersViewModel } from "./types/typedef";
import { UserViewModel } from "../user/types/typedef";

export type UserState = {
  usersData: { users: Array<UsersViewModel>; total: number };
  usersTable: {
    pagination: { page: number; rowsPerPage: number };
    selectedRows: Array<string>;
  };
  ui: {
    isUserEditModalOpen: boolean;
    isUserDeleteModalOpen: boolean;
  };
  userCandidate: UserViewModel | undefined;

  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  usersData: {
    users: [],
    total: 0,
  },
  usersTable: {
    pagination: { page: 0, rowsPerPage: 6 },
    selectedRows: [],
  },
  ui: {
    isUserEditModalOpen: false,
    isUserDeleteModalOpen: false,
  },
  userCandidate: undefined,

  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeSelectedRows: (state, { payload }: PayloadAction<Array<string>>) => {
      state.usersTable.selectedRows = payload;
    },
    toggleEditUserModal: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isUserEditModalOpen = payload;
    },
    openEditUserModal: (state, { payload }: PayloadAction<UserViewModel | undefined>) => {
      state.userCandidate = payload;
      state.ui.isUserEditModalOpen = true;
    },
    closeEditUserModal: (state) => {
      state.ui.isUserEditModalOpen = false;
    },
    deleteUsers: (state, { payload }: PayloadAction<Array<string>>) => {
      state.ui.isUserDeleteModalOpen = true;
      state.usersTable.selectedRows = state.usersTable.selectedRows.length ? state.usersTable.selectedRows : payload;
    },
    toggleDeleteUserModal: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isUserDeleteModalOpen = payload;
      state.usersTable.selectedRows = payload ? state.usersTable.selectedRows : [];
    },
  },

  extraReducers: {
    /* Create User */

    [createUserThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.usersData.total = state.usersData.total + 1;
      state.ui.isUserEditModalOpen = false;
      state.userCandidate = undefined;
    },
    [createUserThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createUserThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },

    /* Get Users */

    [getUsersThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ users: Array<UsersViewModel>; total: number }>,
    ) => {
      state.isLoading = false;
      state.error = "";
      state.usersData = payload;
    },
    [getUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsersThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* Update Users Info */

    [editUsersThunk.fulfilled.type]: (state, { payload }: PayloadAction<UserViewModel>) => {
      state.isLoading = false;
      state.error = "";
      state.usersData.users = state.usersData.users.map((user) => {
        return user.id === payload.id ? payload : user;
      });
      state.ui.isUserEditModalOpen = false;
      state.userCandidate = undefined;
    },
    [editUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [editUsersThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* Remove Users */

    [removeUsersThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.ui.isUserDeleteModalOpen = false;
      state.usersTable.selectedRows = [];
    },
    [removeUsersThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [removeUsersThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
