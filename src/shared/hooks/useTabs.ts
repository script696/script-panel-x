import { useState } from "react";

export const useTabs = (defaultTab = 0) => {
  const [tab, setTab] = useState(defaultTab);
  const handleClickTab = (_: unknown, newValue: number) => {
    setTab(newValue);
  };

  return { tab, handleClickTab };
};
