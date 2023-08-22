import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
  ProductSecondaryInfo,
} from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import { TFunction } from "i18next";

type useDescriptionFormParams = {
  product: ProductSecondaryInfo;
  t: TFunction;
  onSubmit: (productMainInfo: ProductSecondaryInfo) => void;
};

export const useDescriptionForm = ({
  product,
  t,
  onSubmit,
}: useDescriptionFormParams) => {
  const formik = useFormik({
    initialValues: {
      id: product.id,
      description: product.description,
    },
    validationSchema: Yup.object({
      description: Yup.string()
        .min(10)
        .max(200)
        .required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
