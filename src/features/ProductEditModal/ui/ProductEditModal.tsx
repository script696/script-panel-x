import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import React, { FC } from "react";
import { Box, Tabs, Tab } from "@material-ui/core";
import { MainInfo } from "./MainInfo/MainInfo";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import { ProductCreateMainInfo, ProductEditMainInfo } from "../types/typedef";
import {
  createProductThunk,
  updateProductMainInfoThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";

const ProductEditModal = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { toggleEditProductModal } = productsSlice.actions;

  const { ui, productToAddCandidate } = useAppSelector(
    (state) => state.productReducer
  );

  const { isProductEditModalOpen } = ui;
  const mode = productToAddCandidate ? "edit" : "create";

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCloseModal = () => {
    dispatch(toggleEditProductModal(false));
  };

  const handleSubmitProductMainInfo = (
    productMainInfo: ProductEditMainInfo | ProductCreateMainInfo
  ) => {
    if ("id" in productMainInfo && productMainInfo.id) {
      dispatch(updateProductMainInfoThunk(productMainInfo));
    } else {
      dispatch(createProductThunk(productMainInfo));
    }
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

        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={t("productManagement.modal.tab.main-info")} />
          {mode === "edit" && (
            <>
              <Tab label={t("productManagement.modal.tab.description")} />
              <Tab label={t("productManagement.modal.tab.gallery")} />
            </>
          )}
        </Tabs>

        {value === 0 && (
          <MainInfo
            processing={false}
            product={productToAddCandidate}
            onClose={handleCloseModal}
            onSubmit={handleSubmitProductMainInfo}
          />
        )}
        {mode === "edit" && value === 1 && (
          <Description
            processing={false}
            onClose={handleCloseModal}
            product={productToAddCandidate}
          />
        )}
        {mode === "edit" && value === 2 && (
          <Gallery
            processing={false}
            onClose={handleCloseModal}
            product={productToAddCandidate}
          />
        )}
      </Box>
    </Dialog>
  );
};

export default ProductEditModal;
