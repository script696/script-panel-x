import { useFormik } from "formik";
import * as Yup from "yup";
import { TFunction } from "i18next";

type useDescriptionFormParams = {
  user: any;
  t: TFunction;
  onSubmit: (botInfo: any) => void;
};

export const useBotInfoForm = ({
  user,
  t,
  onSubmit,
}: useDescriptionFormParams) => {
  const formik = useFormik({
    initialValues: {
      id: user.id,
      name: user.bot.name,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(10)
        .max(40)
        .required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
