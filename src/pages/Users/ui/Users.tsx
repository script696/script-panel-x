import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { TableToolbar } from "../../../widgets/TableToolbar";
import { ProductEditModal } from "../../../features/ProductEditModal";
import ConfirmDeleteModal from "../../../shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useProductsRdx } from "../hooks/useProductsRdx";
import UsersTable from "../../../widgets/UsersTable/ui/UsersTable";

const Users = () => {
  const { t } = useTranslation();
  const {
    usersState,
    handleAddNewProduct,
    handleCloseDeleteProductModel,
    handleEditProduct,
    handleDeleteProducts,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  } = useProductsRdx();

  const { usersTable, isLoading } = usersState;
  const { selectedRows } = usersTable;
  // const { isProductDeleteModalOpen } = ui;

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
      <UsersTable
        onDelete={handleDeleteProducts}
        onEdit={handleEditProduct}
        onSelectedChange={handleChangeSelectedRows}
        selected={selectedRows}
      />
      <ConfirmDeleteModal
        description={t("userManagement.confirmations.delete")}
        isLoading={isLoading}
        onClose={handleCloseDeleteProductModel}
        onConfirm={handleConfirmDeleteRows}
        open={false}
        title={t("common.confirmation")}
      />
      <ProductEditModal />
    </React.Fragment>
  );
};

export default Users;
