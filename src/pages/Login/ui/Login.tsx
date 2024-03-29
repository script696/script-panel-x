import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import BoxedLayout from "shared/components/BoxedLayout/BoxedLayout";
import { useLoginRdx } from "../hooks/useLoginRdx";
import { useLoginForm } from "../hooks/useLoginForm";
import LoginTabs from "widgets/LoginTabs/ui/LoginTabs";
import { Link } from "react-router-dom";
import { ROUTES_BASE } from "app/routing";

const Login = () => {
  const { t } = useTranslation();
  const { handleSubmitLogin, isLoading } = useLoginRdx();
  const { formik, forceSetFormValue } = useLoginForm({ onSubmit: handleSubmitLogin });

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
        <LoginTabs forceSetFormValue={forceSetFormValue} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {t("auth.login.title")}
          </Typography>
          <Box component="form" marginTop={3} noValidate onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="nikName"
              label={t("auth.login.form.nickname.label")}
              name="nikName"
              autoComplete="nikName"
              autoFocus
              disabled={isLoading}
              value={formik.values.nikName}
              onChange={formik.handleChange}
              error={formik.touched.nikName && Boolean(formik.errors.nikName)}
              helperText={formik.touched.nikName && formik.errors.nikName}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="password"
              label={t("auth.login.form.password.label")}
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isLoading}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <LoadingButton type="submit" fullWidth loading={isLoading} variant="contained" sx={{ mt: 3 }}>
              {t("auth.login.submit")}
            </LoadingButton>
          </Box>
          <Typography marginTop={3} variant={"h6"}>
            {t("auth.login.redirect.text")}
            <Link to={`/${ROUTES_BASE.REGISTRATION}`} style={{ textDecoration: "none", marginLeft: "5px" }} replace>
              <Typography color={"primary.main"} sx={{ display: "inline" }}>
                {t("auth.login.redirect.button")}
              </Typography>
            </Link>
          </Typography>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};

export default Login;
