import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { ChangeEvent, FormEvent, useState } from "react";
import { COLOR_THEME_FORM_DEFAULT_VALUES } from "features/BotColorThemeConstructor/constants/constants";

type UseBotMainInfoFormParams = {
  botColorTheme?: BotViewModel["colorTheme"];
  onSubmit: (botColorTheme: BotViewModel["colorTheme"]) => void;
  reloadBotFrame: () => void;
};

export const useColorThemeForm = ({ botColorTheme, onSubmit, reloadBotFrame }: UseBotMainInfoFormParams) => {
  const [colorThemeForm, setColorThemeForm] = useState<Record<keyof BotViewModel["colorTheme"], string>>(
    botColorTheme ?? COLOR_THEME_FORM_DEFAULT_VALUES,
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(colorThemeForm);
    reloadBotFrame();
  };

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setColorThemeForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setColorThemeForm(botColorTheme ?? COLOR_THEME_FORM_DEFAULT_VALUES);
  };

  return { handleSubmit, handleChangeColor, colorThemeForm, resetForm };
};
