import Grid from "@material-ui/core/Grid";
import React from "react";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import AdminToolbar from "../../../shared/components/AdminToolbar/AdminToolbar";
import RecentNotifications from "../../../shared/components/RecentNotifications/RecentNotifications";
import AchievementWidget from "../../../widgets/AchievementWidget/AchievementWidget";
import WelcomeWidget from "../../../widgets/WelcomeWidget/WelcomeWidget";

const Home = () => {
  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar>
          <RecentNotifications />
        </AdminToolbar>
      </AdminAppBar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <WelcomeWidget />
          <AchievementWidget />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
