import { Route, Routes } from "react-router-dom";
import PrivateRoute from "shared/components/PrivateRoute/PrivateRoute";
import { AdminLayoutLazy } from "shared/layouts/AdminLayout";
import { FaqLazy } from "pages/Faq";
import { HelpCenterLazy } from "pages/HelpCenter";
import { BotLazy } from "pages/Bot";
import { ProfileLazy } from "pages/Profile";
import { LoginLazy } from "pages/Login";
import { ForbiddenLazy } from "pages/Forbidden";
import { NotFoundLazy } from "pages/NotFound";
import { UnderConstructionsLazy } from "pages/UnderConstructions";
import { ProductsLazy } from "pages/Products";
import { UsersLazy } from "pages/Users";
import { ROUTES_ADMIN, ROUTES_BASE, ROUTES_SYSTEM_ADMIN } from "../constants/routes";
import { RegistrationLazy } from "../../../pages/Registration";
import { Navigate } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <PrivateRoute path={ROUTES_BASE.SYSTEM_ADMIN} element={<AdminLayoutLazy />} requiredRole={"system-admin"}>
        <PrivateRoute path={ROUTES_SYSTEM_ADMIN.USERS} element={<UsersLazy />} />
        <PrivateRoute path={ROUTES_SYSTEM_ADMIN.PROFILE} element={<ProfileLazy />} />
      </PrivateRoute>

      <PrivateRoute path={ROUTES_BASE.ADMIN} element={<AdminLayoutLazy />} requiredRole={"admin"}>
        <PrivateRoute path={ROUTES_ADMIN.BOT} element={<BotLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PRODUCTS} element={<ProductsLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.FAQ} element={<FaqLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.HELP} element={<HelpCenterLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PROFILE} element={<ProfileLazy />} />
      </PrivateRoute>
      <Route path={ROUTES_BASE.LOGIN} element={<LoginLazy />} />
      <Route path={ROUTES_BASE.REGISTRATION} element={<RegistrationLazy />} />
      <Route path={ROUTES_BASE.UNDER_CONSTRUCTION} element={<UnderConstructionsLazy />} />
      <Route path={ROUTES_BASE.FORBIDDEN} element={<ForbiddenLazy />} />
      <Route path={ROUTES_BASE.NOT_FOUND} element={<NotFoundLazy />} />
      <Route path="/" element={<Navigate to={`${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.BOT}`} replace />} />
      <Route path="*" element={<Navigate to={ROUTES_BASE.NOT_FOUND} replace />} />
    </Routes>
  );
};

export default AppRoutes;
