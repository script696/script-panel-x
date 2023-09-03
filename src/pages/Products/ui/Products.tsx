import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "widgets/ProductsTable";
import { TableToolbar } from "widgets/TableToolbar";
import { ProductEditModal } from "features/ProductEditModal";
import ConfirmDeleteModal from "shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useProductsRdx } from "../hooks/useProductsRdx";

const Products = () => {
  const { t } = useTranslation();
  const {
    productsState,
    handleAddNewProduct,
    handleCloseDeleteProductModel,
    handleEditProduct,
    handleDeleteProducts,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  } = useProductsRdx();

  const { productsTable, ui, isLoading } = productsState;
  const { selectedRows } = productsTable;
  const { isProductDeleteModalOpen } = ui;

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={isLoading}
          onAddNewRow={handleAddNewProduct}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleDeleteProducts}
          selectedRows={selectedRows}
        />
      </AdminAppBar>
      <ProductsTable
        onDelete={handleDeleteProducts}
        onEdit={handleEditProduct}
        onSelectedChange={handleChangeSelectedRows}
        selected={selectedRows}
      />
      <ConfirmDeleteModal
        description={t("admin.products.delete-modal.confirm-delete")}
        isLoading={isLoading}
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
