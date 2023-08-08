import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../../shared/components/AdminAppBar/AdminAppBar";
import AdminToolbar from "../../../shared/components/AdminToolbar/AdminToolbar";
import ConfirmDialog from "../../../shared/components/ConfirmDialog/ConfirmDialog";
import SelectToolbar from "../../../shared/components/SelectToolbar/SelectToolbar";
import { useSnackbar } from "../../../app/providers/SnackbarProvider";
import UserDialog from "../../../users/components/UserDialog";
import { useAddUser } from "../../../users/hooks/useAddUser";
import { useDeleteUsers } from "../../../users/hooks/useDeleteUsers";
import { useUpdateUser } from "../../../users/hooks/useUpdateUser";
import { useUsers } from "../../../users/hooks/useUsers";
import { User } from "../../../users/types/user";
import { ProductsTable } from "../../../widgets/ProductsTable";
import { PRODUCTS_MOCK } from "../../../shared/mocks/products";
import { ProductViewModel } from "../../../widgets/ProductsTable/types/typedef";
import { TableToolbar } from "../../../widgets/TableToolbar";

const Products = () => {
  const snackbar = useSnackbar();
  const { t } = useTranslation();

  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [userDeleted, setUserDeleted] = useState<string[]>([]);
  const [userUpdated, setUserUpdated] = useState<ProductViewModel | undefined>(
    undefined
  );

  const { addUser, isAdding } = useAddUser();
  const { deleteUsers, isDeleting } = useDeleteUsers();
  const { isUpdating, updateUser } = useUpdateUser();
  const { data } = useUsers();

  const processing = isAdding || isDeleting || isUpdating;

  const handleAddUser = async (user: Partial<ProductViewModel>) => {
    console.log("add user");
    // addUser(user as ProductViewModel)
    //   .then(() => {
    //     snackbar.success(
    //       t("userManagement.notifications.addSuccess", {
    //         user: `${user.firstName} ${user.lastName}`,
    //       })
    //     );
    //     setOpenUserDialog(false);
    //   })
    //   .catch(() => {
    //     snackbar.error(t("common.errors.unexpected.subTitle"));
    //   });
  };

  const handleDeleteUsers = async () => {
    deleteUsers(userDeleted)
      .then(() => {
        snackbar.success(t("userManagement.notifications.deleteSuccess"));
        setSelected([]);
        setUserDeleted([]);
        setOpenConfirmDeleteDialog(false);
      })
      .catch(() => {
        snackbar.error(t("common.errors.unexpected.subTitle"));
      });
  };

  const handleUpdateUser = async (user: ProductViewModel) => {
    console.log("update");
    // updateUser(user)
    //   .then(() => {
    //     snackbar.success(
    //       t("userManagement.notifications.updateSuccess", {
    //         user: `${user.firstName} ${user.lastName}`,
    //       })
    //     );
    //     setOpenUserDialog(false);
    //   })
    //   .catch(() => {
    //     snackbar.error(t("common.errors.unexpected.subTitle"));
    //   });
  };

  const handleCancelSelected = () => {
    setSelected([]);
  };

  const handleCloseConfirmDeleteDialog = () => {
    setOpenConfirmDeleteDialog(false);
  };

  const handleCloseUserDialog = () => {
    setUserUpdated(undefined);
    setOpenUserDialog(false);
  };

  const handleOpenConfirmDeleteDialog = (userIds: string[]) => {
    setUserDeleted(userIds);
    setOpenConfirmDeleteDialog(true);
  };

  const handleOpenUserDialog = (product?: ProductViewModel) => {
    setUserUpdated(product);
    setOpenUserDialog(true);
  };

  const handleSelectedChange = (newSelected: string[]) => {
    setSelected(newSelected);
  };

  return (
    <React.Fragment>
      <AdminAppBar>
        <TableToolbar
          isLoading={processing}
          onAddNewRow={handleOpenUserDialog}
          onCancelSelecting={handleCancelSelected}
          onDeleteSelected={handleOpenConfirmDeleteDialog}
          selectedRows={selected}
        />
      </AdminAppBar>
      <ProductsTable
        processing={processing}
        onDelete={handleOpenConfirmDeleteDialog}
        onEdit={handleOpenUserDialog}
        onSelectedChange={handleSelectedChange}
        selected={selected}
        products={PRODUCTS_MOCK}
      />
      <ConfirmDialog
        description={t("userManagement.confirmations.delete")}
        pending={processing}
        onClose={handleCloseConfirmDeleteDialog}
        onConfirm={handleDeleteUsers}
        open={openConfirmDeleteDialog}
        title={t("common.confirmation")}
      />
      {openUserDialog && (
        <UserDialog
          onAdd={handleAddUser}
          onClose={handleCloseUserDialog}
          onUpdate={handleUpdateUser}
          open={openUserDialog}
          processing={processing}
          product={userUpdated}
        />
      )}
    </React.Fragment>
  );
};

export default Products;
