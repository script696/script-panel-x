import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import LoadingButton from "@material-ui/lab/LoadingButton";
import Box from "@material-ui/core/Box";
import { useMainInfoForm } from "../hooks/useMainInfoForm";
import { useTranslation } from "react-i18next";
import { useRegistrationRdx } from "../hooks/useRegistrationRdx";

export const MainInfoForm: FC = () => {
  const { t } = useTranslation();
  const { handleSubmitRegistration, isLoading } = useRegistrationRdx();
  const { formik } = useMainInfoForm({ onSubmit: handleSubmitRegistration });

  return (
    <Box
      component="form"
      marginTop={3}
      noValidate
      onSubmit={formik.handleSubmit}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"100%"}
    >
      <Box>
        <TextField
          margin="normal"
          variant="filled"
          required
          fullWidth
          id="nikName"
          label={t("auth.registration.form.nickName.label")}
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
          label={t("auth.registration.form.password.label")}
          type="password"
          id="password"
          disabled={isLoading}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          margin="normal"
          variant="filled"
          required
          fullWidth
          name="passwordRepeat"
          label={t("auth.registration.form.passwordRepeat.label")}
          type="passwordRepeat"
          id="passwordRepeat"
          disabled={isLoading}
          value={formik.values.passwordRepeat}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.passwordRepeat)}
          helperText={formik.errors.passwordRepeat}
        />
      </Box>

      <LoadingButton type="submit" fullWidth loading={isLoading} variant="contained" sx={{ mt: 3 }}>
        {t("auth.registration.submitContinue")}
      </LoadingButton>
    </Box>
  );
};
