import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "@material-ui/core/Alert/Alert";
import { OpenSnackbarPayload } from "app/store/reducers/snackbar/types/typedef";

export type SnackbarState = {
  severity: Color;
  isOpen: boolean;
  message: string;
};

const initialState: SnackbarState = {
  severity: "info",
  isOpen: false,
  message: "",
};

export const snackbarSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    openSnackbar: (state, { payload }: PayloadAction<OpenSnackbarPayload>) => {
      state.isOpen = true;
      state.message = payload.message;
      state.severity = payload.severity;
    },
    closeSnackbar: (state) => {
      state.isOpen = false;
      state.message = "";
      state.severity = "info";
    },
  },

  extraReducers: {},
});

export default snackbarSlice.reducer;
