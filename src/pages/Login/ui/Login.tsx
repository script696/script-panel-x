import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "../../../shared/components/BoxedLayout/BoxedLayout";
import { useSnackbar } from "../../../app/providers/SnackbarProvider/SnackbarProvider";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { signInThunk } from "../../../app/providers/StoreProvider/reducers/auth/authThunk";
import { SignInRequestDto } from "../../../shared/api/auth/dto/signInDto";
import { $apiClient } from "../../../shared/api/client";
import { getUserThunk } from "../../../app/providers/StoreProvider/reducers/user/userThunk";
import { GetUserDto } from "../../../shared/api/users/dto/GetUserDto";

const Login = () => {
  const dispatch = useAppDispatch();
  // const { user } = useAppSelector((state) => state.userReducer);

  // const { isLoggingIn, login } = useAuth();
  const navigate = useNavigate();
  // const snackbar = useSnackbar();

  const { t } = useTranslation();

  const submit = async (data: SignInRequestDto) => {
    const { meta } = await dispatch(signInThunk(data));
    if (meta.requestStatus !== "fulfilled") return;
    const { payload } = await dispatch(getUserThunk());
    const user = payload as GetUserDto | undefined;

    if (!user) return;

    const redirectUrl =
      user.role === "admin"
        ? `/${process.env.PUBLIC_URL}/admin`
        : `/${process.env.PUBLIC_URL}/system-admin`;

    navigate(redirectUrl, { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      nikName: "",
      password: "",
    },
    validationSchema: Yup.object({
      nikName: Yup.string().required(t("common.validations.required")),
      password: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit: submit,
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./img/startup.svg)",
          backgroundRepeat: "no-repeat",
          bgcolor: "background.default",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {t("auth.login.title")}
          </Typography>
          <Box
            component="form"
            marginTop={3}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="nikName"
              label={t("auth.login.form.email.label")}
              name="nikName"
              autoComplete="nikName"
              autoFocus
              disabled={false}
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
              disabled={false}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box sx={{ textAlign: "right" }}>
              <Link
                component={RouterLink}
                to={`/${process.env.PUBLIC_URL}/forgot-password`}
                variant="body2"
              >
                {t("auth.login.forgotPasswordLink")}
              </Link>
            </Box>
            <LoadingButton
              type="submit"
              fullWidth
              loading={false}
              variant="contained"
              sx={{ mt: 3 }}
            >
              {t("auth.login.submit")}
            </LoadingButton>
            <Button
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/register`}
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {t("auth.login.newAccountLink")}
            </Button>
          </Box>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};

export default Login;
