import { Box, Dialog, Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BG_TO_LABEL_MAP } from "../constants/constants";
import { useUpdateColorModalRdx } from "features/BotColorThemeConstructor/hooks/useUpdateColorModalRdx";
import { useColorThemeForm } from "features/BotColorThemeConstructor/hooks/useColorThemeForm";

type UpdateColorModalProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
  botColorTheme?: BotViewModel["colorTheme"];
  reloadBotFrame: () => void;
};

const UpdateColorModal: FC<UpdateColorModalProps> = ({ isModalOpen, onCloseModal, botColorTheme, reloadBotFrame }) => {
  const { t } = useTranslation();

  const { handleSubmit: onSubmit, isLoading } = useUpdateColorModalRdx({
    onCloseModal,
  });

  const { handleSubmit, handleChangeColor, colorThemeForm, resetForm } = useColorThemeForm({
    botColorTheme,
    onSubmit,
    reloadBotFrame,
  });

  const handleCloseModal = () => {
    resetForm();
    onCloseModal();
  };

  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <DialogTitle id="bot-dialog-title">{t("admin.bot.constructor.main-info.title")}</DialogTitle>
      <Box component={"form"} onSubmit={handleSubmit} noValidate flexGrow={1} display={"flex"} flexDirection={"column"}>
        <DialogContent sx={{ minWidth: "500px" }}>
          <Box mb={5}>
            <Typography variant={"h5"} align={"center"} mb={2}>
              Background
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["bgMain"]}
                </Typography>
                <input
                  name={"bgMain"}
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["bgMain"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>

              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["bgDark"]}
                </Typography>
                <input
                  name={"bgDark"}
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["bgDark"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["bgLight"]}
                </Typography>
                <input
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["bgLight"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant={"h5"} align={"center"} mb={2}>
              Text
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["primaryColor"]}
                </Typography>
                <input
                  name={"primaryColor"}
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["primaryColor"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>

              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["secondaryColor"]}
                </Typography>
                <input
                  name={"secondaryColor"}
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["secondaryColor"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
                <Typography variant={"h6"} noWrap>
                  {BG_TO_LABEL_MAP["alternateColor"]}
                </Typography>
                <input
                  name={"alternateColor"}
                  type={"color"}
                  style={{ border: "none", cursor: "pointer" }}
                  value={colorThemeForm["alternateColor"]}
                  onChange={handleChangeColor}
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <Box sx={{ flexGrow: 1 }} />
        <DialogActions>
          <Button onClick={handleCloseModal}>{t("common.cancel")}</Button>
          <LoadingButton loading={isLoading} type="submit" variant="contained">
            {t("common.edit")}
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default UpdateColorModal;
