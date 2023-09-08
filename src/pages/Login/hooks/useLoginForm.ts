import { useFormik } from "formik";
import * as Yup from "yup";
import { SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { useTranslation } from "react-i18next";

export type LoginFormValues = { nikName: string; password: string };

type UseLoginFormParams = {
  onSubmit: (data: SignInRequestDto) => Promise<void>;
};

export const useLoginForm = ({ onSubmit }: UseLoginFormParams) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      nikName: "",
      password: "",
    },
    validationSchema: Yup.object({
      nikName: Yup.string().required(t("common.validations.required")),
      password: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit,
  });

  const forceSetFormValue = (formValues: LoginFormValues) => {
    formik.setValues(formValues);
  };

  return { formik, forceSetFormValue };
};
