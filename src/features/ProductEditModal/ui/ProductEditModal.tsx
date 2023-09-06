import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import { Box, Tabs, Tab } from "@material-ui/core";
import { MainInfo } from "./MainInfo/MainInfo";
import Description from "./Description/Description";
import Gallery from "./Gallery/Gallery";
import { Mode } from "../types/typedef";
import { useProductEditModalRdx } from "../hooks/useProductEditModalRdx";
import { useTabs } from "shared/hooks/useTabs";

const ProductEditModal = () => {
  const { t } = useTranslation();
  const { tab, handleClickTab } = useTabs();

  const {
    productsState,
    handleAddImages,
    handleDeleteImages,
    handleCloseModal,
    handleSubmitProductMainInfo,
    handleUpdateProductSecondaryInfo,
  } = useProductEditModalRdx();

  const { productCandidate, ui, isLoading } = productsState;

  const { isProductEditModalOpen } = ui;
  const mode: Mode = productCandidate ? "edit" : "create";

  return (
    <Dialog open={isProductEditModalOpen} onClose={handleCloseModal}>
      <Box width={{ md: "500px", height: "80vh" }} display={"flex"} flexDirection={"column"}>
        <DialogTitle id="product-dialog-title">
          {mode === "edit" ? t("admin.products.edit-modal.title-edit") : t("admin.products.edit-modal.title-create")}
        </DialogTitle>

        <Tabs value={tab} onChange={handleClickTab} centered>
          <Tab label={t("admin.products.edit-modal.tab-main-info")} />
          <Tab label={t("admin.products.edit-modal.tab-description")} disabled={mode === "create"} />
          <Tab label={t("admin.products.edit-modal.tab-gallery")} disabled={mode === "create"} />
        </Tabs>

        {tab === 0 && (
          <MainInfo
            isLoading={isLoading}
            product={productCandidate}
            onClose={handleCloseModal}
            onSubmit={handleSubmitProductMainInfo}
            mode={mode}
          />
        )}
        {productCandidate && mode === "edit" && tab === 1 && (
          <Description
            isLoading={isLoading}
            onClose={handleCloseModal}
            product={productCandidate}
            onSubmit={handleUpdateProductSecondaryInfo}
          />
        )}
        {mode === "edit" && tab === 2 && (
          <Gallery
            isLoading={isLoading}
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
