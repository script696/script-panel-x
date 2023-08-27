import HomeIcon from "@material-ui/icons/Home";
import { ROUTES_ADMIN, ROUTES_BASE } from "../../../../app/routing";
import PeopleIcon from "@material-ui/icons/People";
import HelpCenterIcon from "@material-ui/icons/HelpCenter";
import CategoryIcon from "@material-ui/icons/Category";
import SmartToyIcon from "@material-ui/icons/SmartToy";
import { ROUTES_SYSTEM_ADMIN } from "../../../../app/routing/constants/routes";

export const ADMIN_MENU_ITEMS = [
  {
    icon: HomeIcon,
    key: "admin.drawer.menu.home",
    path: `/${ROUTES_BASE.ADMIN}`,
  },
  {
    icon: CategoryIcon,
    key: "Products",
    path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.PRODUCTS}`,
  },
  {
    icon: HelpCenterIcon,
    key: "admin.drawer.menu.help",
    path: `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.HELP}`,
  },
];

export const SYSTEM_ADMIN_MENU_ITEMS = [
  {
    icon: HomeIcon,
    key: "home",
    path: `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.PROFILE}`,
  },
  {
    icon: PeopleIcon,
    key: "peoples",
    path: `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.USERS}`,
  },
  {
    icon: SmartToyIcon,
    key: "bots",
    path: `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.BOTS}`,
  },
];
