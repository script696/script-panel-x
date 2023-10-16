import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import LoadingButton from "@material-ui/lab/LoadingButton";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";
import { useRegistrationRdx } from "../hooks/useRegistrationRdx";
import { useBotInfoForm } from "../hooks/useBotInfoForm";

export const BotInfoForm: FC = () => {
  const { t } = useTranslation();
  const { handleSubmitBotInfo, isLoading } = useRegistrationRdx();
  const { formik } = useBotInfoForm({ onSubmit: handleSubmitBotInfo });

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
      <TextField
        margin="normal"
        variant="filled"
        required
        fullWidth
        id="token"
        label={t("auth.registration.form.token.label")}
        name="token"
        autoComplete="token"
        autoFocus
        disabled={isLoading}
        value={formik.values.token}
        onChange={formik.handleChange}
        error={formik.touched.token && Boolean(formik.errors.token)}
        helperText={formik.touched.token && formik.errors.token}
      />
      <LoadingButton type="submit" fullWidth loading={isLoading} variant="contained" sx={{ mt: 3 }}>
        {t("auth.registration.submitContinue")}
      </LoadingButton>
    </Box>
  );
};
