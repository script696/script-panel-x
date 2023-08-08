import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import React, { FC, useState } from "react";
import Empty from "../../../shared/components/Empty/Empty";
import * as selectUtils from "../../../shared/utils/selectUtils";
import { ProductsTableRow } from "./ProductsTableRow";
import { ProductsTableHead } from "./ProductsTableHead";
import { ProductViewModel } from "../types/typedef";

type ProductsTableProps = {
  processing: boolean;
  onDelete: (userIds: string[]) => void;
  onEdit: (user: ProductViewModel) => void;
  onSelectedChange: (selected: string[]) => void;
  selected: string[];
  products?: Array<ProductViewModel>;
};

const ProductsTable: FC<ProductsTableProps> = ({
  onDelete,
  onEdit,
  onSelectedChange,
  processing,
  selected,
  products = [],
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(products);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };

  const handleClick = (id: string) => {
    let newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  if (products.length === 0) {
    return <Empty title="No user yet" />;
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
          <ProductsTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={products.length}
          />
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <ProductsTableRow
                  index={index}
                  key={user.id}
                  onCheck={handleClick}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  processing={processing}
                  selected={isSelected(user.id)}
                  product={user}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
};

export default ProductsTable;
