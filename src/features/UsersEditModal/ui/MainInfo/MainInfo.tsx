import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import DialogActions from "@material-ui/core/DialogActions";
import { Mode } from "../../types/typedef";
import { useMainInfoForm } from "../../hooks/useMainInfoForm";
import {
  UserCreateMainInfo,
  UserEditMainInfo,
  UserViewModel,
} from "app/store/reducers/user/types/typedef";

type MainInfoProps = {
  mode: Mode;
  onClose: () => void;
  onSubmit: (userMainInfo: UserEditMainInfo | UserCreateMainInfo) => void;
  isLoading: boolean;
  user?: UserViewModel;
};

export const MainInfo: FC<MainInfoProps> = (props) => {
  const { user, isLoading, onClose, onSubmit, mode } = props;
  const { t } = useTranslation();
  const { formik } = useMainInfoForm({ user, t, onSubmit, mode });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="nikName"
          label={"nikName"}
          name="nikName"
          autoFocus
          disabled={isLoading}
          value={formik.values.nikName}
          onChange={formik.handleChange}
          error={formik.touched.nikName && Boolean(formik.errors.nikName)}
          helperText={formik.touched.nikName && formik.errors.nikName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type={"password"}
          id="password"
          label={"Password"}
          name="password"
          autoFocus
          disabled={isLoading}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="botName"
          label={"botName"}
          name="botName"
          autoFocus
          disabled={isLoading}
          value={formik.values.botName}
          onChange={formik.handleChange}
          error={formik.touched.botName && Boolean(formik.errors.botName)}
          helperText={formik.touched.botName && formik.errors.botName}
        />
      </DialogContent>
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={isLoading} type="submit" variant="contained">
          {mode === "edit" ? "Save" : "Create"}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};
