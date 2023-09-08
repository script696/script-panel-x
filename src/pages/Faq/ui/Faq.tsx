import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import { AppFaq } from "widgets/AppFaq";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar />
      </AdminAppBar>
      <Container maxWidth="sm">
        <Typography align="center" marginBottom={6} variant="h2">
          {t("faq.title")}
        </Typography>
        <AppFaq />
      </Container>
    </React.Fragment>
  );
};

export default Faq;
