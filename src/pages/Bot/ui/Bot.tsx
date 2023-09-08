import React, { useRef } from "react";
import { IphoneTemplate } from "shared/components/IphoneTemplate";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import { useTranslation } from "react-i18next";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import { Grid, Typography } from "@material-ui/core";
import { BotConstructor } from "widgets/BotConstructor";
import { useAppSelector } from "app/store";

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

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("admin.bot.toolbar.title")} />
      </AdminAppBar>

      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={6} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IphoneTemplate>
            <iframe
              ref={botFrame}
              src={`http://localhost:4000?botName=${bot?.name}`}
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
            Control your bot !
          </Typography>
          <BotConstructor reloadBotFrame={reloadBotFrame} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Bot;
