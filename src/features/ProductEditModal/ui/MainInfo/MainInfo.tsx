import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { ProductViewModel } from "../../../../widgets/ProductsTable/types/typedef";
import DialogContent from "@material-ui/core/DialogContent";
import { DataWith } from "../../../../shared/types/types";

type MainInfoProps = DataWith<{
  onAdd: (product: Partial<ProductViewModel>) => void;
  onClose: () => void;
  onUpdate: (product: ProductViewModel) => void;
  open: boolean;
  processing: boolean;
  product?: Pick<ProductViewModel, "title" | "brand" | "size" | "amount">;
}>;

const SIZES_MOCK = ["10", "11", "12"];

export const MainInfo: FC<MainInfoProps> = ({ data }) => {
  const { product, processing } = data;

  const { t } = useTranslation();
  const handleSubmit = (values: Partial<ProductViewModel>) => {
    // if (product && product.id) {
    //   onUpdate({ ...values, id: product.id } as ProductViewModel);
    // } else {
    //   onAdd(values);
    // }
  };

  const formik = useFormik({
    initialValues: {
      title: product ? product.title : "",
      brand: product ? product.brand : "",
      size: product ? product.size : "",
      amount: product ? product.amount : 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(t("common.validations.required")),
      brand: Yup.string().required(t("common.validations.required")),
      size: Yup.string().required(t("common.validations.required")),
      amount: Yup.number().required(t("common.validations.required")),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <DialogContent>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label={t("productManagement.form.title.label")}
          name="title"
          autoFocus
          disabled={processing}
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="brand"
          label={t("productManagement.form.brand.label")}
          name="brand"
          autoComplete="given-name"
          disabled={processing}
          value={formik.values.brand}
          onChange={formik.handleChange}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
        />
        <Select
          id="size"
          name="size"
          fullWidth
          value={formik.values.size}
          defaultValue={formik.values.size}
          labelId="size-label"
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
        >
          {SIZES_MOCK.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <TextField
          margin="normal"
          required
          fullWidth
          id="amount"
          label={t("productManagement.form.amount.label")}
          name="amount"
          autoComplete="given-name"
          disabled={processing}
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <FormControl component="fieldset" margin="normal">
          <FormControlLabel
            name="disabled"
            disabled={processing}
            onChange={formik.handleChange}
            checked={formik.values.disabled}
            control={<Checkbox />}
            label={t("productManagement.form.disabled.label")}
          />
        </FormControl>
      </DialogContent>
    </form>
  );
};
