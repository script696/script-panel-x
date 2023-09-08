import { Box, Dialog, InputLabel, Link, Slider, Typography } from "@material-ui/core";
import React, { FC } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useBotLogoForm } from "../hooks/useBotLogoForm";
import { useUpdateLogoModalRdx } from "../hooks/useUpdateLogoModalRdx";
import { LOGO_SIZE_MARKS } from "../constants/constants";

type UpdateLogoModalProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
  botLogo: BotViewModel["logo"];
};

const UpdateLogoModal: FC<UpdateLogoModalProps> = ({ isModalOpen, onCloseModal, botLogo }) => {
  const { handleSubmit, isLoading } = useUpdateLogoModalRdx({
    onCloseModal,
  });
  const { t } = useTranslation();

  const { formik } = useBotLogoForm({
    t,
    botLogo,
    onSubmit: handleSubmit,
  });

  return (
    <Dialog open={isModalOpen} onClose={onCloseModal}>
      <DialogTitle id="bot-dialog-title">{t("admin.bot.constructor.logo.title")}</DialogTitle>
      <Box
        minWidth={"500px"}
        component={"form"}
        onSubmit={formik.handleSubmit}
        noValidate
        flexGrow={1}
        display={"flex"}
        flexDirection={"column"}
      >
        <Typography variant={"h6"} align={"center"}>
          Please, copy logo link url from &nbsp;
          <Link href={"https://www.svgrepo.com"} target={"_blank"} underline={"hover"}>
            SVG Repo
          </Link>
          &nbsp;!
        </Typography>
        <DialogContent>
          <TextField
            margin="normal"
            required
            fullWidth
            id="source"
            label={"Logo source"}
            name="source"
            autoFocus
            disabled={isLoading}
            value={formik.values.source}
            onChange={formik.handleChange}
            error={formik.touched.source && Boolean(formik.errors.source)}
            helperText={formik.touched.source && formik.errors.source}
          />
        </DialogContent>
        <Box paddingX={5} display={"flex"} flexDirection={"column"} gap={1}>
          <InputLabel id={`logo size`}>Logo Size</InputLabel>
          <Slider
            name={"size"}
            aria-label="Always visible"
            defaultValue={100}
            step={10}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            marks={LOGO_SIZE_MARKS}
            value={formik.values.size}
            onChange={formik.handleChange}
          />
        </Box>

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

export default UpdateLogoModal;
