import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useBotInfoForm } from "../../hooks/useBotInfoForm";

type BotInfoProps = {
  isLoading: boolean;
  user: any;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

const BotInfo: FC<BotInfoProps> = (props) => {
  const { t } = useTranslation();
  const { user, isLoading, onClose, onSubmit } = props;
  const { formik } = useBotInfoForm({ user, t, onSubmit });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
    >
      <DialogContent>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label={"Bot name"}
          name="name"
          autoFocus
          disabled={isLoading}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </DialogContent>
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={isLoading} type="submit" variant="contained">
          {t("productManagement.modal.edit.action")}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};

export default BotInfo;
