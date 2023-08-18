import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { TableToolbar } from "../../../widgets/TableToolbar";
import { ProductEditModal } from "../../../features/ProductEditModal";
import { useSelectRows } from "../../../shared/hooks/useSelectRows";
import ConfirmDeleteModal from "../../../shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import {
  getProductsThunk,
  removeProductsThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";

const Products = () => {
  const { t } = useTranslation();
  const processing = false;

  const dispatch = useAppDispatch();
  const {
    openEditProductModal,
    toggleDeleteProductModal,
    deleteProducts,
    changeSelectedRows,
  } = productsSlice.actions;

  const { productsTable, ui } = useAppSelector((state) => state.productReducer);

  const { pagination, selectedRows } = productsTable;
  const { isProductDeleteModalOpen } = ui;
  useEffect(() => {
    dispatch(getProductsThunk(pagination));
  }, [pagination]);

  const handleAddNewProduct = () => {
    dispatch(openEditProductModal());
  };

  const handleCloseDeleteProductModel = () => {
    dispatch(toggleDeleteProductModal(false));
  };

  const handleEditProduct = (product: ProductViewModel) => {
    dispatch(openEditProductModal(product));
  };

  const handleDeleteProducts = (productsIds: Array<string>) => {
    dispatch(deleteProducts(productsIds));
  };

  const handleCancelSelected = () => {
    dispatch(changeSelectedRows([]));
  };

  const handleChangeSelectedRows = (selectedRows: Array<string>) => {
    dispatch(changeSelectedRows(selectedRows));
  };

  const handleConfirmDeleteRows = async () => {
    await dispatch(
      removeProductsThunk({ shopId: "1", productIds: selectedRows })
    );
    await dispatch(getProductsThunk(pagination));
  };

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={processing}
          onAddNewRow={handleAddNewProduct}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleDeleteProducts}
          selectedRows={selectedRows}
        />
      </AdminAppBar>
      <ProductsTable
        processing={processing}
        onDelete={handleDeleteProducts}
        onEdit={handleEditProduct}
        onSelectedChange={handleChangeSelectedRows}
        selected={selectedRows}
      />
      <ConfirmDeleteModal
        description={t("userManagement.confirmations.delete")}
        pending={processing}
        onClose={handleCloseDeleteProductModel}
        onConfirm={handleConfirmDeleteRows}
        open={isProductDeleteModalOpen}
        title={t("common.confirmation")}
      />
      <ProductEditModal />
    </React.Fragment>
  );
};

export default Products;
