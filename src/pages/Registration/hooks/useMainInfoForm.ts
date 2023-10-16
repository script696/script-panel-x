import { useFormik } from "formik";
import * as Yup from "yup";
import { SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { useTranslation } from "react-i18next";

export type LoginFormValues = { nikName: string; password: string; passwordRepeat: string };

type useMainInfoFormParams = {
  onSubmit: (data: SignInRequestDto) => Promise<void>;
};

export const useMainInfoForm = ({ onSubmit }: useMainInfoFormParams) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      nikName: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: Yup.object({
      nikName: Yup.string().required(t("common.validations.required")).min(3),
      password: Yup.string().required(t("common.validations.required")).min(4),
      passwordRepeat: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit,
  });

  const forceSetFormValue = (formValues: LoginFormValues) => {
    formik.setValues(formValues);
  };

  return { formik, forceSetFormValue };
};
