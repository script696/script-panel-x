import { useFormik } from "formik";
import * as Yup from "yup";
import { TFunction } from "i18next";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";

type useBotMainInfoFormParams = {
  botMainInfo?: BotViewModel["mainInfo"];
  t: TFunction;
  onSubmit: (botMainInfo: BotViewModel["mainInfo"]) => void;
};

export const useColorThemeForm = ({
  botMainInfo,
  t,
  onSubmit,
}: useBotMainInfoFormParams) => {
  const formik = useFormik({
    initialValues: {
      helloText: botMainInfo?.helloText ?? "",
      shopName: botMainInfo?.shopName ?? "",
    },
    validationSchema: Yup.object({
      helloText: Yup.string()
        .min(4)
        .max(200)
        .required(t("common.validations.required")),
      shopName: Yup.string()
        .min(4)
        .max(200)
        .required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
