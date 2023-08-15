import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
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
  const isEditMode = Boolean(product && product.id);
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);
  const tabData = { ...props, isEditMode };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        width={{ md: "500px", height: "80vh" }}
        display={"flex"}
        flexDirection={"column"}
      >
        <DialogTitle id="product-dialog-title">
          {isEditMode
            ? t("productManagement.modal.edit.title")
            : t("productManagement.modal.add.title")}
        </DialogTitle>

        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={t("productManagement.modal.tab.main-info")} />
          <Tab label={t("productManagement.modal.tab.description")} />
          <Tab label={t("productManagement.modal.tab.gallery")} />
        </Tabs>

        {value === 0 && <MainInfo data={tabData} />}
        {value === 1 && <Description data={tabData} />}
        {value === 2 && <Gallery data={tabData} />}
      </Box>
    </Dialog>
  );
};

export default ProductEditModal;
