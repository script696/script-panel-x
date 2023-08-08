import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import QueryWrapper from "../../../components/QueryWrapper/QueryWrapper";
import SettingsDrawer from "../../../components/SettingsDrawer/SettingsDrawer";
import { useSettings } from "../../../../app/providers/SettingsProvider";
import { Sidebar } from "../../../components/Sidebar";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import HelpCenterIcon from "@material-ui/icons/HelpCenter";
import { ROUTES_ADMIN, ROUTES_BASE } from "../../../../app/routing";

const AdminLayout = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { collapsed, open, toggleDrawer } = useSettings();

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  const menuItems = [
    {
      icon: HomeIcon,
      key: "admin.drawer.menu.home",
      path: `/${ROUTES_BASE.ADMIN}`,
    },
    {
      icon: PeopleIcon,
      key: "admin.drawer.menu.userManagement",
      path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.PRODUCTS}`,
    },
    {
      icon: HelpCenterIcon,
      key: "admin.drawer.menu.help",
      path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.HELP}`,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={open}
        onDrawerToggle={toggleDrawer}
        onSettingsToggle={handleSettingsToggle}
        menuItems={menuItems}
      />
      <SettingsDrawer
        onDrawerToggle={handleSettingsToggle}
        open={settingsOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, pb: 3, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
        <QueryWrapper>
          <Outlet />
        </QueryWrapper>
      </Box>
    </Box>
  );
};

export default AdminLayout;
