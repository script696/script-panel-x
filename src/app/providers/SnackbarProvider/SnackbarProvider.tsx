import Alert from "@material-ui/core/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import { useAppDispatch, useAppSelector } from "app/store";
import { snackbarSlice } from "app/store/reducers/snackbar/snackbarSlice";

type SnackbarProviderProps = {
  children: React.ReactNode;
};

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const dispatch = useAppDispatch();
  const { closeSnackbar } = snackbarSlice.actions;
  const { severity, isOpen, message } = useAppSelector((state) => state.snackbarReducer);

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isOpen}
        transitionDuration={0}
        autoHideDuration={3000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert variant={"filled"} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </>
  );
};

export default SnackbarProvider;
