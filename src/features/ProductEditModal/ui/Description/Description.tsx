import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { DataWith } from "../../../../shared/types/types";
import { Box } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { ProductViewModel } from "../../../../app/providers/StoreProvider/reducers/products/types/typedef";

type DescriptionProps = {
  processing: boolean;
  product?: Pick<ProductViewModel, "description">;
  onClose: () => void;
};

const Description: FC<DescriptionProps> = (props) => {
  const { t } = useTranslation();
  const { product, processing, onClose } = props;

  const handleSubmit = (values: Partial<ProductViewModel>) => {
    console.log(values);
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
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
      flexGrow={1}
      display={"flex"}
      flexDirection={"column"}
    >
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
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={processing} type="submit" variant="contained">
          {t("productManagement.modal.edit.action")}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};

export default Description;
