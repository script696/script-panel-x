import React from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { TableToolbar } from "../../../widgets/TableToolbar";
import { ProductEditModal } from "../../../features/ProductEditModal";
import ConfirmDeleteModal from "../../../shared/components/ConfirmDeleteModal/ConfirmDeleteModal";
import { useUsersRdx } from "../hooks/useUsersRdx";
import UsersTable from "../../../widgets/UsersTable/ui/UsersTable";
import { UsersEditModal } from "../../../features/UsersEditModal";

const Users = () => {
  const { t } = useTranslation();
  const {
    usersState,
    handleAddNewUser,
    handleCloseDeleteProductModel,
    handleEditUser,
    handleDeleteUsers,
    handleCancelSelected,
    handleChangeSelectedRows,
    handleConfirmDeleteRows,
  } = useUsersRdx();

  const { usersTable, isLoading, ui } = usersState;
  const { selectedRows } = usersTable;
  const { isUserDeleteModalOpen } = ui;

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={isLoading}
          onAddNewRow={handleAddNewUser}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleDeleteUsers}
          selectedRows={selectedRows}
        />
      </AdminAppBar>
      <UsersTable
        onDelete={handleDeleteUsers}
        onEdit={handleEditUser}
        onSelectedChange={handleChangeSelectedRows}
        selected={selectedRows}
      />
      <ConfirmDeleteModal
        description={t("userManagement.confirmations.delete")}
        isLoading={isLoading}
        onClose={handleCloseDeleteProductModel}
        onConfirm={handleConfirmDeleteRows}
        open={isUserDeleteModalOpen}
        title={t("common.confirmation")}
      />
      <UsersEditModal />
    </React.Fragment>
  );
};

export default Users;
