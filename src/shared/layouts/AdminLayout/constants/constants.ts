import HomeIcon from "@material-ui/icons/Home";
import { ROUTES_ADMIN, ROUTES_BASE } from "app/routing";
import PeopleIcon from "@material-ui/icons/People";
import HelpCenterIcon from "@material-ui/icons/HelpCenter";
import CategoryIcon from "@material-ui/icons/Category";
import { ROUTES_SYSTEM_ADMIN } from "app/routing/constants/routes";

export const ADMIN_MENU_ITEMS = [
  {
    icon: HomeIcon,
    key: "admin.sidebar.menu.bot",
    path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.BOT}`,
  },
  {
    icon: CategoryIcon,
    key: "admin.sidebar.menu.products",
    path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.PRODUCTS}`,
  },
  {
    icon: HelpCenterIcon,
    key: "admin.sidebar.menu.help",
    path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.HELP}`,
  },
];

export const SYSTEM_ADMIN_MENU_ITEMS = [
  {
    icon: HomeIcon,
    key: "system-admin.sidebar.menu.home",
    path: `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.PROFILE}`,
  },
  {
    icon: PeopleIcon,
    key: "system-admin.sidebar.menu.users",
    path: `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.USERS}`,
  },
];
