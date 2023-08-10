import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductViewModel } from "../../../../widgets/ProductsTable/types/typedef";
import { useTranslation } from "react-i18next";
import { DataWith } from "../../../../shared/types/types";

type DescriptionProps = DataWith<{
  processing: boolean;
  product?: Pick<ProductViewModel, "description">;
}>;

const Description: FC<DescriptionProps> = ({ data }) => {
  const { t } = useTranslation();
  const { product, processing } = data;

  const handleSubmit = (values: Partial<ProductViewModel>) => {
    console.log(values);
    // if (product && product.id) {
    //   onUpdate({ ...values, id: product.id } as ProductViewModel);
    // } else {
    //   onAdd(values);
    // }
  };

  const formik = useFormik({
    initialValues: {
      description: product ? product.description : "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <DialogContent>
        <TextField
          minRows={12}
          multiline
          margin="normal"
          required
          fullWidth
          id="description"
          label={t("productManagement.form.description.label")}
          name="description"
          autoFocus
          disabled={processing}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </DialogContent>
    </form>
  );
};

export default Description;
