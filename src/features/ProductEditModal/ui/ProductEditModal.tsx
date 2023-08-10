import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import LoadingButton from "@material-ui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import { ProductViewModel } from "../../../widgets/ProductsTable/types/typedef";
import React, { FC } from "react";
import { Box, Tabs, Tab } from "@material-ui/core";
import { MainInfo } from "./MainInfo/MainInfo";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";

type ProductEditModalProps = {
  onAdd: (product: Partial<ProductViewModel>) => void;
  onClose: () => void;
  onUpdate: (product: ProductViewModel) => void;
  open: boolean;
  processing: boolean;
  product?: ProductViewModel;
};

const ProductEditModal: FC<ProductEditModalProps> = (props) => {
  const { open, onClose, product, processing } = props;
  const editMode = Boolean(product && product.id);
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        width={{ md: "500px" }}
        height={{ md: "700px" }}
        display={"flex"}
        flexDirection={"column"}
        // alignItems={"stretch"}
      >
        <DialogTitle id="product-dialog-title">
          {editMode
            ? t("productManagement.modal.edit.title")
            : t("productManagement.modal.add.title")}
        </DialogTitle>

        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={t("productManagement.modal.tab.main-info")} />
          <Tab label={t("productManagement.modal.tab.description")} />
          <Tab label={t("productManagement.modal.tab.gallery")} />
        </Tabs>

        {value === 0 && <MainInfo data={props} />}
        {value === 1 && <Description data={props} />}
        {value === 2 && <Gallery data={props} />}

        <Box sx={{ flexGrow: 1 }} />
        <DialogActions>
          <Button onClick={onClose}>{t("common.cancel")}</Button>
          <LoadingButton loading={processing} type="submit" variant="contained">
            {editMode
              ? t("productManagement.modal.edit.action")
              : t("productManagement.modal.add.action")}
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ProductEditModal;
