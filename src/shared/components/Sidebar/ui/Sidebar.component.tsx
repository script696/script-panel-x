import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { drawerCollapsedWidth, drawerWidth } from "app/config/layout";
import Logo from "../../Logo/Logo";
import { FC } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  ROUTES_ADMIN,
  ROUTES_SYSTEM_ADMIN,
} from "app/routing/constants/routes";

type MenuItem = {
  icon: OverridableComponent<SvgIconTypeMap>;
  key: string;
  path: string;
};

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  onSettingsToggle: () => void;
  menuItems: Array<MenuItem>;
  user: { nikName: string; role: string } | null;
};

export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  mobileOpen,
  onDrawerToggle,
  onSettingsToggle,
  menuItems,
  user,
}) => {
  const { t } = useTranslation();

  const width = collapsed ? drawerCollapsedWidth : drawerWidth;

  const { nikName, role } = user || {};

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Logo sx={{ display: "flex", p: 4 }} />
      <List component="nav" sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            component={NavLink}
            key={item.path}
            activeClassName="Mui-selected"
            end={true}
            to={item.path}
          >
            <ListItemAvatar>
              <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
                <item.icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={t(item.key)}
              sx={{
                display: collapsed ? "none" : "block",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List component="nav" sx={{ p: 2 }}>
        <ListItem
          button
          component={NavLink}
          to={
            role === "admin"
              ? ROUTES_ADMIN.PROFILE
              : ROUTES_SYSTEM_ADMIN.PROFILE
          }
        >
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={nikName}
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
        <ListItem button onClick={onSettingsToggle}>
          <ListItemAvatar>
            <Avatar>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t("admin.sidebar.menu.settings")}
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      aria-label="Admin drawer"
      component="nav"
      sx={{
        width: { lg: width },
        flexShrink: { lg: 0 },
      }}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: width,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
