import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { CheckBotRequestDto } from "shared/api/bot/dto/CheckBotDto";
import { TELEGRAM_TOKEN_REGEX } from "shared/constants/regex";

type useBotInfoFormParams = {
  onSubmit: (data: CheckBotRequestDto) => Promise<void>;
};

export const useBotInfoForm = ({ onSubmit }: useBotInfoFormParams) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .required(t("common.validations.required"))
        .matches(TELEGRAM_TOKEN_REGEX, "A Telegram token is required"),
    }),
    onSubmit,
  });

  return { formik };
};
