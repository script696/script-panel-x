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
  createProductThunk,
  updateProductMainInfoThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/products/types/typedef";

const ProductEditModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { toggleEditProductModal } = productsSlice.actions;
  const { ui, productCandidate } = useAppSelector(
    (state) => state.productReducer
  );
  const [value, setValue] = React.useState(0);

  const { isProductEditModalOpen } = ui;
  const mode = productCandidate ? "edit" : "create";

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
            product={productCandidate}
            onClose={handleCloseModal}
            onSubmit={handleSubmitProductMainInfo}
          />
        )}
        {mode === "edit" && value === 1 && (
          <Description
            processing={false}
            onClose={handleCloseModal}
            product={productCandidate}
          />
        )}
        {mode === "edit" && value === 2 && (
          <Gallery
            processing={false}
            onClose={handleCloseModal}
            product={productCandidate}
          />
        )}
      </Box>
    </Dialog>
  );
};

export default ProductEditModal;
