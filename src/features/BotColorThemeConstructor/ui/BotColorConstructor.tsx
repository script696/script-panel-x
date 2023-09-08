import React, { FC } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useModal } from "shared/hooks/useModal";
import EditableRow from "shared/components/EditableRow/EditableRow";
import UpdateColorModal from "./UpdateColorModal";
import { BG_TO_LABEL_MAP, COLOR_THEME_FORM_DEFAULT_VALUES } from "../constants/constants";
import { useAppSelector } from "app/store";

type BotColorThemeConstructorProps = {
  reloadBotFrame: () => void;
};

const BotColorThemeConstructor: FC<BotColorThemeConstructorProps> = ({ reloadBotFrame }) => {
  const { isModalOpen, handleOpen, handleClose } = useModal();
  const { bot } = useAppSelector((state) => state.botReducer);

  const colorTheme = bot?.colorTheme ?? COLOR_THEME_FORM_DEFAULT_VALUES;

  return (
    <EditableRow title={"Color Theme"} onEdit={handleOpen}>
      <Box mb={2}>
        <Typography variant={"h5"} align={"center"} mb={2}>
          Background
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["bgMain"]}</Typography>
            <Box sx={{ background: colorTheme["bgMain"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["bgDark"]}</Typography>
            <Box sx={{ background: colorTheme["bgDark"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["bgLight"]}</Typography>
            <Box sx={{ background: colorTheme["bgLight"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant={"h5"} align={"center"} mb={2}>
          Text
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["primaryColor"]}</Typography>
            <Box sx={{ background: colorTheme["primaryColor"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["secondaryColor"]}</Typography>
            <Box sx={{ background: colorTheme["secondaryColor"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
          <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"center"} rowGap={1}>
            <Typography variant={"h6"}>{BG_TO_LABEL_MAP["alternateColor"]}</Typography>
            <Box sx={{ background: colorTheme["alternateColor"] }} width={50} height={50} borderRadius={"50%"} />
          </Grid>
        </Grid>
      </Box>
      <UpdateColorModal
        isModalOpen={isModalOpen}
        onCloseModal={handleClose}
        botColorTheme={colorTheme}
        reloadBotFrame={reloadBotFrame}
      />
    </EditableRow>
  );
};

export default BotColorThemeConstructor;
