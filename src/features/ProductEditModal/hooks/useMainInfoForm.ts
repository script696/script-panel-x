import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductCreateMainInfo, ProductEditMainInfo } from "app/store/reducers/products/types/typedef";
import { TFunction } from "i18next";

type UseMainInfoFormParams = {
  product: ProductEditMainInfo | ProductCreateMainInfo | undefined;
  t: TFunction;
  onSubmit: (productMainInfo: ProductEditMainInfo | ProductCreateMainInfo) => void;
};

export const useMainInfoForm = ({ product, t, onSubmit }: UseMainInfoFormParams) => {
  const formik = useFormik({
    initialValues: {
      id: product && "id" in product ? product.id : undefined,
      title: product ? product.title : "",
      brand: product ? product.brand : "",
      availableSizes: product ? product.availableSizes : [],
      amount: product ? product.amount : 0,
      disabled: product ? product.disabled : false,
      price: product ? product.price : 0,
      discount: product ? product.discount : 0,
      currency: product ? product.currency : "$",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(3).max(40).required(t("common.validations.required")),
      brand: Yup.string().min(3).max(40).required(t("common.validations.required")),
      availableSizes: Yup.array().of(Yup.string()),
      amount: Yup.number().min(0).required(t("common.validations.required")),
      price: Yup.number().min(0).required(t("common.validations.required")),
      discount: Yup.number().min(0).required(t("common.validations.required")),
      disabled: Yup.boolean().required(t("common.validations.required")),
    }),
    onSubmit,
  });

  return { formik };
};
