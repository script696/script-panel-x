import { lazy } from "react";

export const AdminLayoutLazy = lazy(
  () => import("../AdminLayout/ui/AdminLayout")
);
