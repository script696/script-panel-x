import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../config/store";
// import { setupStore } from "../config/store";

type StoreProviderProps = {
  children: ReactNode;
};

// const store = setupStore();

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
