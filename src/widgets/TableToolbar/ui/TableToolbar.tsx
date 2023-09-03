import React, { FC } from "react";
import AdminToolbar from "shared/components/AdminToolbar/AdminToolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SelectToolbar from "shared/components/SelectToolbar/SelectToolbar";
import { useTranslation } from "react-i18next";

type TableToolbarProps = {
  isLoading: boolean;
  selectedRows: Array<string>;
  onAddNewRow: () => void;
  onCancelSelecting: () => void;
  onDeleteSelected: (ids: Array<string>) => void;
};

const TableToolbar: FC<TableToolbarProps> = ({
  isLoading,
  selectedRows,
  onCancelSelecting,
  onDeleteSelected,
  onAddNewRow,
}) => {
  const { t } = useTranslation();
  const isTableRowSelected = Boolean(selectedRows.length);

  return (
    <React.Fragment>
      {!isTableRowSelected ? (
        <AdminToolbar title={t("admin.products.toolbar.title")}>
          <Fab
            aria-label="logout"
            color="primary"
            disabled={isLoading}
            onClick={onAddNewRow}
            size="small"
          >
            <AddIcon />
          </Fab>
        </AdminToolbar>
      ) : (
        <SelectToolbar
          processing={isLoading}
          onCancel={onCancelSelecting}
          onDelete={onDeleteSelected}
          selected={selectedRows}
        />
      )}
    </React.Fragment>
  );
};

export default TableToolbar;
