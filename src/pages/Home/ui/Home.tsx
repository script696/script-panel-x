import Grid from "@material-ui/core/Grid";
import React from "react";
import AdminAppBar from "../../../admin/components/AdminAppBar";
import AdminToolbar from "../../../admin/components/AdminToolbar";
import RecentNotifications from "../../../admin/components/RecentNotifications";
import AchievementWidget from "../../../admin/widgets/AchievementWidget";
import WelcomeWidget from "../../../admin/widgets/WelcomeWidget";

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
