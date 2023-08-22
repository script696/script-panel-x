import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import React, { FC, useState } from "react";
import Empty from "../../../shared/components/Empty/Empty";
import * as selectUtils from "../../../shared/utils/selectUtils";
import { UsersTableRow } from "./UsersTableRow";
import { UsersTableHead } from "./UsersTableHead";
import { checkIsRowSelected } from "../utils/checkIsRowSelected";
import { usePagination } from "../../../shared/hooks/usePagination";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { UsersViewModel } from "../../../app/providers/StoreProvider/reducers/users/types/typedef";

type ProductsTableProps = {
  onDelete: (productsIds: Array<string>) => void;
  onEdit: (user: any) => void;
  onSelectedChange: (selected: Array<string>) => void;
  selected: Array<string>;
};

const UsersTable: FC<ProductsTableProps> = ({
  onDelete,
  onEdit,
  onSelectedChange,
  selected,
}) => {
  const { usersData, isLoading, usersTable } = useAppSelector(
    (state) => state.usersReducer
  );
  const dispatch = useAppDispatch();
  // const { changePagination } = productsSlice.actions;

  // const { handleChangePage, handleChangeRowsPerPage } = usePagination({
  //   onChangePagination: (params) => dispatch(changePagination(params)),
  // });

  const { users, total } = usersData;
  const { page, rowsPerPage } = usersTable.pagination;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(users);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };

  const handleClick = (id: string) => {
    let newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };

  if (users.length === 0) {
    return <Empty title="No products yet" />;
  }

  return (
    <React.Fragment>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            minWidth: 600,
            borderCollapse: "separate",
            borderSpacing: "0 1rem",
          }}
        >
          <UsersTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={users.length}
          />
          <TableBody>
            {users.map((user, index) => (
              <UsersTableRow
                index={index}
                key={user.id}
                onCheck={handleClick}
                onDelete={onDelete}
                onEdit={onEdit}
                processing={isLoading}
                selected={checkIsRowSelected(selected, user.id)}
                user={user}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 8, 10]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={() => console.log("click")}
        onRowsPerPageChange={() => console.log("click")}
      />
    </React.Fragment>
  );
};

export default UsersTable;
