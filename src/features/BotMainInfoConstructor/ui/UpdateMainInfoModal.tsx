import { Box, Dialog } from "@material-ui/core";
import React, { FC } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useBotMainInfoForm } from "features/BotMainInfoConstructor/hooks/useBotMainInfoForm";
import { useTranslation } from "react-i18next";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useUpdateMainInfoModalRdx } from "features/BotMainInfoConstructor/hooks/useUpdateMainInfoModalRdx";

type UpdateMainInfoModalProps = {
  isProductEditModalOpen: boolean;
  onCloseModal: () => void;
  botMainInfo?: BotViewModel["mainInfo"];
};

const UpdateMainInfoModal: FC<UpdateMainInfoModalProps> = ({ isProductEditModalOpen, onCloseModal, botMainInfo }) => {
  const { handleSubmit, isLoading } = useUpdateMainInfoModalRdx({
    onCloseModal,
  });
  const { t } = useTranslation();

  const { formik } = useBotMainInfoForm({
    t,
    botMainInfo,
    onSubmit: handleSubmit,
  });

  return (
    <Dialog open={isProductEditModalOpen} onClose={onCloseModal}>
      <DialogTitle id="bot-dialog-title">{t("admin.bot.constructor.main-info.title")}</DialogTitle>
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
            id="helloText"
            label={"helloText"}
            name="helloText"
            autoFocus
            disabled={isLoading}
            value={formik.values.helloText}
            onChange={formik.handleChange}
            error={formik.touched.helloText && Boolean(formik.errors.helloText)}
            helperText={formik.touched.helloText && formik.errors.helloText}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="shopName"
            label={"shopName"}
            name="shopName"
            autoFocus
            disabled={isLoading}
            value={formik.values.shopName}
            onChange={formik.handleChange}
            error={formik.touched.shopName && Boolean(formik.errors.shopName)}
            helperText={formik.touched.shopName && formik.errors.shopName}
          />
        </DialogContent>
        <Box sx={{ flexGrow: 1 }} />
        <DialogActions>
          <Button onClick={onCloseModal}>{t("common.cancel")}</Button>
          <LoadingButton loading={isLoading} type="submit" variant="contained">
            {t("common.edit")}
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default UpdateMainInfoModal;
