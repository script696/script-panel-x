import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SettingsDrawer from "../../../components/SettingsDrawer/SettingsDrawer";
import { useSettings } from "app/providers/SettingsProvider/SettingsProvider";
import { Sidebar } from "shared/components/Sidebar";
import { useAppSelector } from "app/store";
import { ADMIN_MENU_ITEMS, SYSTEM_ADMIN_MENU_ITEMS } from "../constants/constants";

const AdminLayout = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  const [settingsOpen, setSettingsOpen] = useState(false);

  const { collapsed, open, toggleDrawer } = useSettings();

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  const menuItems = user?.role === "admin" ? ADMIN_MENU_ITEMS : SYSTEM_ADMIN_MENU_ITEMS;

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={open}
        onDrawerToggle={toggleDrawer}
        onSettingsToggle={handleSettingsToggle}
        menuItems={menuItems}
        user={user}
      />
      <SettingsDrawer onDrawerToggle={handleSettingsToggle} open={settingsOpen} />
      <Box component="main" sx={{ flexGrow: 1, pb: 3, px: { xs: 3, sm: 6 } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
