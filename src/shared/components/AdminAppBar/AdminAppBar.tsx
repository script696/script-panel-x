import AppBar from "@material-ui/core/AppBar";
import { drawerCollapsedWidth, drawerWidth } from "app/config/layout";
import { useSettings } from "app/providers/SettingsProvider/SettingsProvider";

type AdminAppBarProps = {
  children: React.ReactNode;
};

const AdminAppBar = ({ children }: AdminAppBarProps) => {
  const { collapsed } = useSettings();
  const width = collapsed ? drawerCollapsedWidth : drawerWidth;

  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${width}px)` },
        marginLeft: { lg: width },
      }}
    >
      {children}
    </AppBar>
  );
};

export default AdminAppBar;
