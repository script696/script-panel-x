import { useFormik } from "formik";
import * as Yup from "yup";
import { SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { useTranslation } from "react-i18next";

type useLoginFormParams = {
  onSubmit: (data: SignInRequestDto) => Promise<void>;
};

export const useLoginForm = ({ onSubmit }: useLoginFormParams) => {
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

  return { formik };
};
