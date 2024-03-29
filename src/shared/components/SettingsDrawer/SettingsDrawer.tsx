import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";
import { drawerWidth } from "app/config/layout";
import { useSettings } from "app/providers/SettingsProvider/SettingsProvider";

type SettingsDrawerProps = {
  onDrawerToggle: () => void;
  open: boolean;
};

const SettingsDrawer = ({ onDrawerToggle, open }: SettingsDrawerProps) => {
  const { changeCollapsed, changeMode, collapsed, mode } = useSettings();
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage((event.target as HTMLInputElement).value);
  };

  const handleModeChange = (_: unknown, mode: string) => {
    changeMode(mode);
  };

  const handleSidebarChange = (_: unknown, collapsed: boolean) => {
    changeCollapsed(collapsed);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h5">{t("settings-drawer.title")}</Typography>
        <IconButton color="inherit" onClick={onDrawerToggle} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Typography gutterBottom id="settings-language" marginTop={3} variant="h6">
          {t("settings-drawer.language.label")}
        </Typography>
        <FormControl>
          <RadioGroup
            aria-label="language"
            name="language-radio-group"
            onChange={handleLanguageChange}
            value={i18n.language}
          >
            <FormControlLabel value="en" control={<Radio />} label={t("settings-drawer.language.options.en")} />
            <FormControlLabel value="ru" control={<Radio />} label={t("settings-drawer.language.options.ru")} />
          </RadioGroup>
        </FormControl>
        <Typography gutterBottom id="settings-mode" marginTop={3} variant="h6">
          {t("settings-drawer.mode.label")}
        </Typography>
        <ToggleButtonGroup color="primary" value={mode} exclusive fullWidth onChange={handleModeChange}>
          <ToggleButton value="light">{t("settings-drawer.mode.options.light")}</ToggleButton>
          <ToggleButton value="dark">{t("settings-drawer.mode.options.dark")}</ToggleButton>
        </ToggleButtonGroup>
        <Typography gutterBottom id="settings-mode" marginTop={3} variant="h6">
          {t("settings-drawer.direction.label")}
        </Typography>
        <Typography gutterBottom id="settings-sidebar" marginTop={3} variant="h6">
          {t("settings-drawer.sidebar.label")}
        </Typography>
        <ToggleButtonGroup color="primary" value={collapsed} exclusive fullWidth onChange={handleSidebarChange}>
          <ToggleButton value={true}>{t("settings-drawer.sidebar.options.collapsed")}</ToggleButton>
          <ToggleButton value={false}>{t("settings-drawer.sidebar.options.full")}</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
