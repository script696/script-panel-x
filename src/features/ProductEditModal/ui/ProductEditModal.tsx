import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import React from "react";
import { Box, Tabs, Tab } from "@material-ui/core";
import { MainInfo } from "./MainInfo/MainInfo";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import {
  addImagesThunk,
  createProductThunk,
  getProductsThunk,
  removeImagesThunk,
  updateProductMainInfoThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import { AddProductImagesRequestDto } from "../../../shared/api/product/dto/AddProductImagesDto";
import { RemoveProductImageRequestDto } from "../../../shared/api/product/dto/RemoveProductImagesDto";
import { Mode } from "../types/typedef";

const ProductEditModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { toggleEditProductModal } = productsSlice.actions;
  const { ui, productCandidate, productsTable } = useAppSelector(
    (state) => state.productReducer
  );
  const [tab, setTab] = React.useState(0);

  const { isProductEditModalOpen } = ui;
  const { pagination } = productsTable;
  const mode: Mode = productCandidate ? "edit" : "create";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleAddImages = (data: AddProductImagesRequestDto) => {
    dispatch(addImagesThunk(data));
  };

  const handleDeleteImages = (data: RemoveProductImageRequestDto) => {
    dispatch(removeImagesThunk(data));
  };

  const handleCloseModal = () => {
    dispatch(toggleEditProductModal(false));
  };

  const handleSubmitProductMainInfo = async (
    productMainInfo: ProductEditMainInfo | ProductCreateMainInfo
  ) => {
    if ("id" in productMainInfo && productMainInfo.id) {
      await dispatch(updateProductMainInfoThunk(productMainInfo));
    } else {
      await dispatch(createProductThunk(productMainInfo));
    }
    await dispatch(getProductsThunk(pagination));
  };

  return (
    <Dialog open={isProductEditModalOpen} onClose={handleCloseModal}>
      <Box
        width={{ md: "500px", height: "80vh" }}
        display={"flex"}
        flexDirection={"column"}
      >
        <DialogTitle id="product-dialog-title">
          {t("productManagement.modal.edit.title")}
        </DialogTitle>

        <Tabs value={tab} onChange={handleChange} centered>
          <Tab label={t("productManagement.modal.tab.main-info")} />
          <Tab
            label={t("productManagement.modal.tab.description")}
            disabled={mode === "create"}
          />
          <Tab
            label={t("productManagement.modal.tab.gallery")}
            disabled={mode === "create"}
          />
        </Tabs>

        {tab === 0 && (
          <MainInfo
            processing={false}
            product={productCandidate}
            onClose={handleCloseModal}
            onSubmit={handleSubmitProductMainInfo}
            mode={mode}
          />
        )}
        {mode === "edit" && tab === 1 && (
          <Description
            processing={false}
            onClose={handleCloseModal}
            product={productCandidate}
          />
        )}
        {mode === "edit" && tab === 2 && (
          <Gallery
            processing={false}
            onClose={handleCloseModal}
            product={productCandidate}
            onAddProductImages={handleAddImages}
            onDeleteProductImage={handleDeleteImages}
          />
        )}
      </Box>
    </Dialog>
  );
};

export default ProductEditModal;
