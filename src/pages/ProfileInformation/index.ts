import { lazy } from "react";

export const ProfileInformationLazy = lazy(
  () => import("./ui/ProfileInformation")
);
