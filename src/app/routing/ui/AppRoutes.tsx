import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../../shared/components/PrivateRoute/PrivateRoute";
import { AdminLayoutLazy } from "../../../shared/layouts/AdminLayout";
import { FaqLazy } from "../../../pages/Faq";
import { HelpCenterLazy } from "../../../pages/HelpCenter";
import { HomeLazy } from "../../../pages/Home";
import { ProfileLazy } from "../../../pages/Profile";
import { ProfileInformationLazy } from "../../../pages/ProfileInformation";
import { ProfilePasswordLazy } from "../../../pages/ProfilePassword";
import { ForgotPasswordLazy } from "../../../pages/ForgotPassword";
import { ForgotPasswordSubmitLazy } from "../../../pages/ForgotPasswordSubmit";
import { LoginLazy } from "../../../pages/Login";
import { RegisterLazy } from "../../../pages/Register";
import { ForbiddenLazy } from "../../../pages/Forbidden";
import { NotFoundLazy } from "../../../pages/NotFound";
import { UnderConstructionsLazy } from "../../../pages/UnderConstructions";
import { ProductsLazy } from "../../../pages/Products";
import { IntroLazy } from "../../../pages/Intro";
import { ROUTES_ADMIN, ROUTES_BASE, ROUTES_PROFILE } from "../constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_BASE.MAIN} element={<IntroLazy />} />
      <PrivateRoute path={ROUTES_BASE.ADMIN} element={<AdminLayoutLazy />}>
        <PrivateRoute path={ROUTES_ADMIN.MAIN} element={<HomeLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PRODUCTS} element={<ProductsLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.FAQ} element={<FaqLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.HELP} element={<HelpCenterLazy />} />
        <PrivateRoute path={ROUTES_ADMIN.PROFILE} element={<ProfileLazy />}>
          <PrivateRoute
            path={ROUTES_PROFILE.INFORMATION}
            element={<ProfileInformationLazy />}
          />
          <PrivateRoute
            path={ROUTES_PROFILE.PASSWORD}
            element={<ProfilePasswordLazy />}
          />
        </PrivateRoute>
      </PrivateRoute>
      <Route
        path={ROUTES_BASE.FORGOT_PASSWORD}
        element={<ForgotPasswordLazy />}
      />
      <Route
        path={ROUTES_BASE.FORGOT_PASSWORD_SUBMIT}
        element={<ForgotPasswordSubmitLazy />}
      />
      <Route path={ROUTES_BASE.LOGIN} element={<LoginLazy />} />
      <Route path={ROUTES_BASE.REGISTER} element={<RegisterLazy />} />
      <Route
        path={ROUTES_BASE.UNDER_CONSTRUCTION}
        element={<UnderConstructionsLazy />}
      />
      <Route path={ROUTES_BASE.FORBIDDEN} element={<ForbiddenLazy />} />
      <Route path={ROUTES_BASE.NOT_FOUND} element={<NotFoundLazy />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
