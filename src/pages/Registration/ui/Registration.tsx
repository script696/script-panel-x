import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import BoxedLayout from "shared/components/BoxedLayout/BoxedLayout";
import { RegistrationStepper } from "./RegistrationStepper";
import { useRegistrationRdx } from "../hooks/useRegistrationRdx";
import { MainInfoForm } from "./MainInfoForm";
import { BotInfoForm } from "./BotInfoForm";
import { SuccessRegistration } from "./SuccessRegistration";
import { Link } from "react-router-dom";
import { ROUTES_BASE } from "app/routing";
import { useEffect } from "react";
import MainInfoDescription from "pages/Registration/ui/MainInfoDescription";
import BotInfoDescription from "pages/Registration/ui/BotInfoDescription";

const Registration = () => {
  const { t } = useTranslation();
  const { registration, resetRegistrationState } = useRegistrationRdx();

  useEffect(() => {
    return () => {
      resetRegistrationState();
    };
  }, []);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{ bgcolor: "background.default", maxHeight: "100vh", overflowY: "auto" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {registration.activeStep === 0 && <MainInfoDescription />}
        {registration.activeStep === 1 && <BotInfoDescription />}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {t("auth.registration.title")}
          </Typography>
          <Box height={"400px"} width={"100%"}>
            {registration.activeStep === 0 && <MainInfoForm />}
            {registration.activeStep === 1 && <BotInfoForm />}
            {registration.activeStep === 2 && <SuccessRegistration />}
          </Box>
          <Box marginTop={10} width={"100%"}>
            <RegistrationStepper activeStep={registration.activeStep} />
          </Box>
          <Typography marginTop={3} variant={"h6"}>
            {t("auth.registration.redirect.text")}
            <Link to={`/${ROUTES_BASE.LOGIN}`} style={{ textDecoration: "none", marginLeft: "5px" }} replace>
              <Typography color={"primary.main"} sx={{ display: "inline" }}>
                {t("auth.registration.redirect.button")}
              </Typography>
            </Link>
          </Typography>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};

export default Registration;
