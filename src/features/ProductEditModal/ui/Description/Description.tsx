import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { ProductSecondaryInfo } from "app/store/reducers/products/types/typedef";
import { useDescriptionForm } from "../../hooks/useDescriptionForm";

type DescriptionProps = {
  isLoading: boolean;
  product: ProductSecondaryInfo;
  onClose: () => void;
  onSubmit: (data: ProductSecondaryInfo) => void;
};

const Description: FC<DescriptionProps> = (props) => {
  const { t } = useTranslation();
  const { product, isLoading, onClose, onSubmit } = props;
  const { formik } = useDescriptionForm({ product, t, onSubmit });

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
          disabled={isLoading}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </DialogContent>
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={isLoading} type="submit" variant="contained">
          {t("productManagement.modal.edit.action")}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};

export default Description;
