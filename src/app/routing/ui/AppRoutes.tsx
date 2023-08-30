import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../../shared/components/PrivateRoute/PrivateRoute";
import { AdminLayoutLazy } from "../../../shared/layouts/AdminLayout";
import { FaqLazy } from "../../../pages/Faq";
import { HelpCenterLazy } from "../../../pages/HelpCenter";
import { HomeLazy } from "../../../pages/Home";
import { ProfileLazy } from "../../../pages/Profile";
import { LoginLazy } from "../../../pages/Login";
import { ForbiddenLazy } from "../../../pages/Forbidden";
import { NotFoundLazy } from "../../../pages/NotFound";
import { UnderConstructionsLazy } from "../../../pages/UnderConstructions";
import { ProductsLazy } from "../../../pages/Products";
import { UsersLazy } from "../../../pages/Users";
import {
  ROUTES_ADMIN,
  ROUTES_BASE,
  ROUTES_SYSTEM_ADMIN,
} from "../constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <PrivateRoute
        path={ROUTES_BASE.SYSTEM_ADMIN}
        element={<AdminLayoutLazy />}
      >
        <PrivateRoute
          path={ROUTES_SYSTEM_ADMIN.USERS}
          element={<UsersLazy />}
        />
        <PrivateRoute
          path={ROUTES_SYSTEM_ADMIN.BOTS}
          element={<div>bots</div>}
        />
        <PrivateRoute
          path={ROUTES_SYSTEM_ADMIN.PROFILE}
          element={<ProfileLazy />}
        />
      </PrivateRoute>

      <PrivateRoute path={ROUTES_BASE.ADMIN} element={<AdminLayoutLazy />}>
        <PrivateRoute path={ROUTES_ADMIN.MAIN} element={<HomeLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PRODUCTS} element={<ProductsLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.FAQ} element={<FaqLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.HELP} element={<HelpCenterLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PROFILE} element={<ProfileLazy />} />
      </PrivateRoute>
      <Route path={ROUTES_BASE.LOGIN} element={<LoginLazy />} />
      <Route
        path={ROUTES_BASE.UNDER_CONSTRUCTION}
        element={<UnderConstructionsLazy />}
      />
      <Route path={ROUTES_BASE.FORBIDDEN} element={<ForbiddenLazy />} />
      <Route path={ROUTES_BASE.NOT_FOUND} element={<NotFoundLazy />} />
      <Route path="/" element={<Navigate to={ROUTES_BASE.ADMIN} replace />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
