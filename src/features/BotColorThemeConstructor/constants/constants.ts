import { BotViewModel } from "app/store/reducers/bot/types/typedef";

export const BG_TO_LABEL_MAP = {
  bgMain: "Main",
  bgLight: "Light",
  bgDark: "Dark",
  primaryColor: "Primary",
  secondaryColor: "Secondary",
  alternateColor: "Alternate",
} as const;

export const COLOR_THEME_FORM_DEFAULT_VALUES: BotViewModel["colorTheme"] = {
  bgMain: "#000000",
  bgLight: "#000000",
  bgDark: "#000000",
  primaryColor: "#000000",
  secondaryColor: "#000000",
  alternateColor: "#000000",
} as const;
