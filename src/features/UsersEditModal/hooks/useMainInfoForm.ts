import { useFormik } from "formik";
import * as Yup from "yup";
import { TFunction } from "i18next";
import {
  UserCreateMainInfo,
  UserEditMainInfo,
  UserViewModel,
} from "../../../app/store/reducers/user/types/typedef";

type UseMainInfoFormParams = {
  mode: "edit" | "create";
  user?: UserViewModel;
  t: TFunction;
  onSubmit: (userMainInfo: UserEditMainInfo | UserCreateMainInfo) => void;
};

export const useMainInfoForm = ({
  user,
  t,
  onSubmit,
  mode,
}: UseMainInfoFormParams) => {
  const formik = useFormik({
    initialValues: {
      id: user && "id" in user ? user.id : undefined,
      nikName: user ? user.nikName : "",
      password: mode === "edit" ? "****" : "",
      botName: user ? user.bot.name : "",
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
