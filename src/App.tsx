import * as Sentry from "@sentry/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./shared/components/Loader/Loader";
import QueryWrapper from "./shared/components/QueryWrapper/QueryWrapper";
import { AppRoutes } from "./app/routing";
import SettingsProvider from "./app/providers/SettingsProvider/SettingsProvider";
import SnackbarProvider from "./app/providers/SnackbarProvider/SnackbarProvider";
import { StoreProvider } from "./app/providers/StoreProvider";
import "./app/styles/styles.css";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      suspense: true,
    },
  },
});

const App = () => (
  <React.Suspense fallback={<Loader />}>
    {/*<Sentry.ErrorBoundary fallback={"An error has occurred"}>*/}
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <QueryWrapper>
          <StoreProvider>
            <SnackbarProvider>
              {/*<AuthProvider>*/}
              <AppRoutes />
              {/*</AuthProvider>*/}
            </SnackbarProvider>
          </StoreProvider>
        </QueryWrapper>
      </SettingsProvider>
    </QueryClientProvider>
    {/*</Sentry.ErrorBoundary>*/}
  </React.Suspense>
);

export default App;
