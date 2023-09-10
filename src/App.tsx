import React from "react";
import Loader from "./shared/components/Loader/Loader";
import { AppRoutes } from "./app/routing";
import SettingsProvider from "./app/providers/SettingsProvider/SettingsProvider";
import SnackbarProvider from "./app/providers/SnackbarProvider/SnackbarProvider";
import { StoreProvider } from "./app/providers/StoreProvider";
import "./app/styles/styles.css";
import AuthProvider from "./app/providers/AuthProvider/AuthProvider";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <React.Suspense fallback={<Loader />}>
    <SettingsProvider>
      <StoreProvider>
        <SnackbarProvider>
          <AuthProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </SnackbarProvider>
      </StoreProvider>
    </SettingsProvider>
  </React.Suspense>
);

export default App;
