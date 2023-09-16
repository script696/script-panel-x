import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductCreateMainInfo, ProductEditMainInfo } from "app/store/reducers/products/types/typedef";
import { TFunction } from "i18next";
import { ChangeEvent, useCallback } from "react";
import { MIN_AVAILABLE_PRICE_RUB, MIN_AVAILABLE_PRICE_USD } from "shared/utils/getPriceWithCurrency";

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
      currency: product ? product.currency : "RUB",
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
    onSubmit: (values) => {
      const { price, discount, currency } = values;
      const minAvailablePrice = currency === "RUB" ? MIN_AVAILABLE_PRICE_RUB : MIN_AVAILABLE_PRICE_USD;

      const isPriceToLow = price - discount <= minAvailablePrice;

      if (isPriceToLow) {
        const errorText = `The price including the discount must be no less than ${minAvailablePrice} ${currency}`;
        formik.setErrors({
          price: errorText,
          discount: errorText,
        });
      } else {
        onSubmit(values);
      }
    },
  });

  const handleChangeNumberInput = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = event.currentTarget.value;
    const isValidRemains = currentValue[currentValue.length - 4] === ".";
    if (isValidRemains) return;
    formik.handleChange(event);
  }, []);

  return { formik, handleChangeNumberInput };
};
