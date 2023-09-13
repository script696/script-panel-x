import { BotViewModel } from "app/store/reducers/bot/types/typedef";

export const BG_TO_LABEL_MAP = {
  bgMain: "admin.bot.constructor.theme.background.bgMain",
  bgLight: "admin.bot.constructor.theme.background.bgLight",
  bgDark: "admin.bot.constructor.theme.background.bgDark",
  primaryColor: "admin.bot.constructor.theme.text.primaryColor",
  secondaryColor: "admin.bot.constructor.theme.text.secondaryColor",
  alternateColor: "admin.bot.constructor.theme.text.alternateColor",
} as const;

export const COLOR_THEME_FORM_DEFAULT_VALUES: BotViewModel["colorTheme"] = {
  bgMain: "#000000",
  bgLight: "#000000",
  bgDark: "#000000",
  primaryColor: "#000000",
  secondaryColor: "#000000",
  alternateColor: "#000000",
} as const;
