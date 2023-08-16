declare module "@mui/material/styles" {
  interface Theme {
    color: {
      error: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      error?: string;
    };
  }
}
