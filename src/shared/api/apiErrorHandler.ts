import { AppDispatch } from "app/store/config/store";
import { snackbarSlice } from "app/store/reducers/snackbar/snackbarSlice";
import { AxiosError } from "axios";

export const apiErrorHandler = (error: unknown, dispatch: AppDispatch) => {
  const { openSnackbar } = snackbarSlice.actions;

  const isAxiosError = error instanceof AxiosError;

  if (isAxiosError) {
    dispatch(openSnackbar({ severity: "error", message: error.message }));
  } else {
    dispatch(openSnackbar({ severity: "error", message: "Unknown error!" }));
  }
};
