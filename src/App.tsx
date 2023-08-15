import * as Sentry from "@sentry/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./app/providers/AuthProvider";
import Loader from "./shared/components/Loader/Loader";
import QueryWrapper from "./shared/components/QueryWrapper/QueryWrapper";
import SettingsProvider from "./app/providers/SettingsProvider";
import SnackbarProvider from "./app/providers/SnackbarProvider";
import { AppRoutes } from "./app/routing";
// import { register } from "swiper/element/bundle";
// register();

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

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      {/*<Sentry.ErrorBoundary fallback={"An error has occurred"}>*/}
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <QueryWrapper>
            <SnackbarProvider>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </SnackbarProvider>
          </QueryWrapper>
        </SettingsProvider>
      </QueryClientProvider>
      {/*</Sentry.ErrorBoundary>*/}
    </React.Suspense>
  );
}

export default App;
