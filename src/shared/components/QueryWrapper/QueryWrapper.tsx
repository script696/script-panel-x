import Button from "@material-ui/core/Button";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import Result from "../ResultImage/ResultImage";

type QueryWrapperProps = {
  children: React.ReactNode;
};

const QueryWrapper = ({ children }: QueryWrapperProps) => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary
      onReset={() => console.info("reset")}
      fallbackRender={({ resetErrorBoundary }) => (
        <Result
          extra={
            <Button onClick={() => resetErrorBoundary()} variant="contained">
              {t("common.retry")}
            </Button>
          }
          status="error"
          subTitle={t("common.errors.unexpected.subTitle")}
          title={t("common.errors.unexpected.title")}
        />
      )}
    >
      <React.Suspense fallback={<Loader />}>{children}</React.Suspense>
    </ErrorBoundary>
  );
};

export default QueryWrapper;
