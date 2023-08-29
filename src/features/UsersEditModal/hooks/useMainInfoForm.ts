import { useFormik } from "formik";
import * as Yup from "yup";
import { TFunction } from "i18next";

type UseMainInfoFormParams = {
  user: any;
  t: TFunction;
  onSubmit: (userMainInfo: any) => void;
};

export const useMainInfoForm = ({
  user,
  t,
  onSubmit,
}: UseMainInfoFormParams) => {
  const formik = useFormik({
    initialValues: {
      id: user && "id" in user ? user.id : undefined,
      nikName: user ? user.nikName : "",
      password: "",
      botName: user ? user.bot.botName : "",
    },
    validationSchema: Yup.object({
      nikName: Yup.string()
        .min(3)
        .max(40)
        .required(t("common.validations.required")),
      password: Yup.string()
        .min(3)
        .max(40)
        .required(t("common.validations.required")),
      botName: Yup.string()
        .min(3)
        .max(40)
        .required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
