import "@material-ui/core";

declare module "@material-ui/core/Button" {
  interface ButtonPropsColorOverrides {
    error: true;
  }
}
