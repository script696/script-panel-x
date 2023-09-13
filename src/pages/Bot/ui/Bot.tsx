import React, { useRef } from "react";
import { IphoneTemplate } from "shared/components/IphoneTemplate";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import { useTranslation } from "react-i18next";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import { Button, Grid, Typography } from "@material-ui/core";
import { BotConstructor } from "widgets/BotConstructor";
import { useAppSelector } from "app/store";
import Box from "@material-ui/core/Box";
import CallMadeIcon from "@material-ui/icons/CallMade";

const Bot = () => {
  const { t } = useTranslation();
  const { bot } = useAppSelector((state) => state.botReducer);
  const botFrame = useRef<HTMLIFrameElement | null>(null);

  const reloadBotFrame = () => {
    if (!botFrame.current) return;
    /* Данный костыль презагружает кроссдоменный айфрейм*/
    // eslint-disable-next-line no-self-assign
    botFrame.current.src = botFrame.current.src;
  };

  const openBotInTg = () => {
    if (!bot) return;
    window.open(`https://t.me/${bot.name}`, "_blank");
  };

  const iframeScr = `${process.env.REACT_APP_BOT_URL}?botName=${bot?.name}`;

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={`${t("admin.bot.toolbar.title")} - ${bot?.name}`}>
          <Button variant={"outlined"} onClick={openBotInTg}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              {t("admin.bot.toolbar.open-bot-button")} <CallMadeIcon sx={{ width: "20px", height: "20px" }} />
            </Box>
          </Button>
        </AdminToolbar>
      </AdminAppBar>

      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={6} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IphoneTemplate>
            <iframe
              ref={botFrame}
              src={iframeScr}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </IphoneTemplate>
        </Grid>
        <Grid item xs={6}>
          <Typography variant={"h2"} align={"center"} mb={1}>
            {t("admin.bot.constructor.title")}
          </Typography>
          <BotConstructor reloadBotFrame={reloadBotFrame} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Bot;
