import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState } from "react";
import Footer from "../../../widgets/Footer/Footer";
import Logo from "../../../shared/components/Logo/Logo";
import SettingsDrawer from "../../../shared/components/SettingsDrawer/SettingsDrawer";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const IntroLayout = ({ children }: LandingLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Paper square>
      <AppBar color="transparent" position="relative">
        <Toolbar>
          <Logo size={24} sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {process.env.REACT_APP_NAME}
          </Typography>
          <IconButton
            color="default"
            aria-label="settings"
            component="span"
            onClick={handleSettingsToggle}
          >
            <SettingsIcon />
          </IconButton>
          <SettingsDrawer
            onDrawerToggle={handleSettingsToggle}
            open={settingsOpen}
          />
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <Footer />
    </Paper>
  );
};

export default IntroLayout;
