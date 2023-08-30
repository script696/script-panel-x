import * as Sentry from "@sentry/react";
import React from "react";
import Loader from "./shared/components/Loader/Loader";
import QueryWrapper from "./shared/components/QueryWrapper/QueryWrapper";
import { AppRoutes } from "./app/routing";
import SettingsProvider from "./app/providers/SettingsProvider/SettingsProvider";
import SnackbarProvider from "./app/providers/SnackbarProvider/SnackbarProvider";
import { StoreProvider } from "./app/providers/StoreProvider";
import "./app/styles/styles.css";
import AuthProvider from "./app/providers/AuthProvider/AuthProvider";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
}

const App = () => (
  <React.Suspense fallback={<Loader />}>
    {/*<Sentry.ErrorBoundary fallback={"An error has occurred"}>*/}
    <SettingsProvider>
      <QueryWrapper>
        <StoreProvider>
          <SnackbarProvider>
            <AuthProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </AuthProvider>
          </SnackbarProvider>
        </StoreProvider>
      </QueryWrapper>
    </SettingsProvider>
    {/*</Sentry.ErrorBoundary>*/}
  </React.Suspense>
);

export default App;
