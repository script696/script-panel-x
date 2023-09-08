import { useFormik } from "formik";
import * as Yup from "yup";
import { TFunction } from "i18next";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { URL_REGEX } from "shared/constants/regex";

type UseBotLogoFormParams = {
  botLogo: BotViewModel["logo"];
  t: TFunction;
  onSubmit: (botMainInfo: BotViewModel["logo"]) => void;
};

export const useBotLogoForm = ({ botLogo, t, onSubmit }: UseBotLogoFormParams) => {
  const { source, size } = botLogo;

  const formik = useFormik({
    initialValues: {
      source,
      size,
    },
    validationSchema: Yup.object({
      source: Yup.string()
        .matches(URL_REGEX, "Enter correct url!")
        .min(4)
        .max(200)
        .required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
