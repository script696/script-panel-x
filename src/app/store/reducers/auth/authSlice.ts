import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuthThunk, logoutThunk, signInThunk, signUpThunk } from "./authThunk";

type RegistrationCandidate = {
  nikName: string;
  password: string;
};

type Registration = {
  stage: "main" | "bot" | "success";
  candidate: RegistrationCandidate | null;
  activeStep: number;
};

export type UserState = {
  isAuth: boolean;
  isChecked: boolean;
  isLoading: boolean;
  role?: "admin" | "system-admin";
  registration: Registration;
  error: string;
};

const DEFAULT_REGISTRATION_STATE = {
  stage: "main",
  candidate: null,
  activeStep: 0,
} as const;

const initialState: UserState = {
  isAuth: false,
  isChecked: false,
  isLoading: false,
  role: undefined,
  registration: DEFAULT_REGISTRATION_STATE,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setActiveStep: (state, { payload }: PayloadAction<{ activeStep: number; candidate?: RegistrationCandidate }>) => {
      state.registration.activeStep = payload.activeStep;
      if (payload.candidate) {
        state.registration.candidate = payload.candidate;
      }
    },
  },

  extraReducers: {
    /*Check Auth*/

    [checkAuthThunk.fulfilled.type]: (state, { payload }: PayloadAction<{ role: "admin" | "system-admin" }>) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.role = payload.role;
      state.isChecked = true;
    },
    [checkAuthThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuthThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
      state.isChecked = true;
    },

    /*Sign In*/

    [signInThunk.fulfilled.type]: (state, { payload }: PayloadAction<{ role: "admin" | "system-admin" }>) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.role = payload.role;
      state.isChecked = true;
    },
    [signInThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signInThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
      state.isChecked = true;
    },

    [signUpThunk.fulfilled.type]: (state, { payload }: PayloadAction<{ role: "admin" | "system-admin" }>) => {
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
      state.role = payload.role;
      state.isChecked = true;
    },
    [signUpThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signUpThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
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
    [logoutThunk.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
