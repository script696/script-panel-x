import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
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
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import DialogActions from "@material-ui/core/DialogActions";
import { ChipSelect } from "../../../../shared/components/ChipSelect";

type MainInfoProps = DataWith<{
  isEditMode: boolean;
  onAdd: (product: Partial<ProductViewModel>) => void;
  onClose: () => void;
  onUpdate: (product: ProductViewModel) => void;
  open: boolean;
  processing: boolean;
  product?: Pick<
    ProductViewModel,
    "id" | "title" | "brand" | "availableSizes" | "amount"
  >;
}>;

export const MainInfo: FC<MainInfoProps> = ({ data }) => {
  const { product, processing, onClose, isEditMode } = data;

  const { t } = useTranslation();
  const handleSubmit = (values: Partial<ProductViewModel>) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      title: product ? product.title : "",
      brand: product ? product.brand : "",
      availableSizes: [],
      amount: product ? product.amount : 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(t("common.validations.required")),
      brand: Yup.string().required(t("common.validations.required")),
      // size: Yup.string().required(t("common.validations.required")),
      amount: Yup.number().required(t("common.validations.required")),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        <FormControl margin="normal">
          <ChipSelect
            id={"availableSizes"}
            label={"Available sizes"}
            onChange={formik.handleChange}
            value={formik.values.availableSizes}
          />
        </FormControl>

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
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={processing} type="submit" variant="contained">
          {isEditMode
            ? t("productManagement.modal.edit.action")
            : t("productManagement.modal.add.action")}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};
