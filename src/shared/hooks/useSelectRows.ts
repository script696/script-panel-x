import { useState } from "react";

export const useSelectRows = () => {
  const [selectedRows, setSelectedRows] = useState<Array<string>>([]);

  const handleCancelSelected = () => {
    setSelectedRows([]);
  };

  const handleSelectedChange = (newSelected: Array<string>) => {
    setSelectedRows(newSelected);
  };

  return { selectedRows, handleCancelSelected, handleSelectedChange };
};
