import TextField from "@material-ui/core/TextField";
import { Box, InputLabel, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import LoadingButton from "@material-ui/lab/LoadingButton";
import DialogActions from "@material-ui/core/DialogActions";
import { ChipSelect } from "shared/components/ChipSelect";
import { ProductCreateMainInfo, ProductEditMainInfo } from "app/store/reducers/products/types/typedef";
import { Mode } from "../../types/typedef";
import { useMainInfoForm } from "../../hooks/useMainInfoForm";
import { MENU_PROPS } from "shared/components/ChipSelect/constants/constants";
import MenuItem from "@material-ui/core/MenuItem";
import { AVAILABLE_CURRENCY } from "shared/utils/getPriceWithCurrency";

type MainInfoProps = {
  mode: Mode;
  onClose: () => void;
  onSubmit: (productMainInfo: ProductEditMainInfo | ProductCreateMainInfo) => void;
  isLoading: boolean;
  product?: ProductEditMainInfo | ProductCreateMainInfo;
};

export const MainInfo: FC<MainInfoProps> = (props) => {
  const { product, isLoading, onClose, onSubmit, mode } = props;
  const { t } = useTranslation();
  const { formik, handleChangeNumberInput } = useMainInfoForm({ product, t, onSubmit });

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
          label={t("admin.products.form-labels.title")}
          name="title"
          autoFocus
          disabled={isLoading}
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
          label={t("admin.products.form-labels.brand")}
          name="brand"
          autoComplete="given-name"
          disabled={isLoading}
          value={formik.values.brand}
          onChange={formik.handleChange}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type={"number"}
          id="price"
          label={t("admin.products.form-labels.price")}
          name="price"
          autoComplete="given-name"
          disabled={isLoading}
          value={formik.values.price}
          onChange={handleChangeNumberInput}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type={"number"}
          id="discount"
          label={t("admin.products.form-labels.discount")}
          name="discount"
          autoComplete="given-name"
          disabled={isLoading}
          value={formik.values.discount}
          onChange={handleChangeNumberInput}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        />
        <FormControl margin="normal">
          <InputLabel id={"currency-label"}>{t("admin.products.form-labels.currency")}</InputLabel>
          <Select
            disabled
            id={"currency"}
            label={t("admin.products.form-labels.currency")}
            name={"currency"}
            onChange={formik.handleChange}
            value={formik.values.currency}
            MenuProps={MENU_PROPS}
          >
            {Object.values(AVAILABLE_CURRENCY).map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="amount"
          label={t("admin.products.form-labels.amount")}
          name="amount"
          autoComplete="given-name"
          disabled={isLoading}
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <FormControl margin="normal">
          <ChipSelect
            id={"availableSizes"}
            label={t("admin.products.form-labels.sizes")}
            onChange={formik.handleChange}
            value={formik.values.availableSizes}
          />
        </FormControl>

        <FormControl component="fieldset" margin="normal">
          <FormControlLabel
            name="disabled"
            disabled={isLoading}
            onChange={formik.handleChange}
            checked={formik.values.disabled}
            control={<Checkbox />}
            label={t("admin.products.form-labels.disabled")}
          />
        </FormControl>
      </DialogContent>
      <Box sx={{ flexGrow: 1 }} />
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <LoadingButton loading={isLoading} type="submit" variant="contained">
          {mode === "edit" ? "Save" : "Create"}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
};
