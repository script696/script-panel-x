import React from "react";
import { IphoneTemplate } from "shared/components/IphoneTemplate";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import { useTranslation } from "react-i18next";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import { Grid, Typography } from "@material-ui/core";
import { BotConstructor } from "widgets/BotConstructor";

const Home = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("admin.bot.toolbar.title")} />
      </AdminAppBar>

      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={6}>
          <IphoneTemplate>
            <iframe
              src={"http://localhost:4000?botName=Nikita"}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </IphoneTemplate>
        </Grid>
        <Grid item xs={6}>
          <Typography variant={"h2"} align={"center"} mb={5}>
            Control your bot !
          </Typography>
          <BotConstructor />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
