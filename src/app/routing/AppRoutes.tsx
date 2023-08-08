import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../shared/components/PrivateRoute/PrivateRoute";
import { AdminLayoutLazy } from "../../shared/layouts/AdminLayout";
import { FaqLazy } from "../../pages/Faq";
import { HelpCenterLazy } from "../../pages/HelpCenter";
import { HomeLazy } from "../../pages/Home";
import { ProfileLazy } from "../../pages/Profile";
import { ProfileActivityLazy } from "../../pages/ProfileActivity";
import { ProfileInformationLazy } from "../../pages/ProfileInformation";
import { ProfilePasswordLazy } from "../../pages/ProfilePassword";
import { ForgotPasswordLazy } from "../../pages/ForgotPassword";

// Auth
// const ForgotPassword = lazy(
//   () => import("../../pages/ForgotPassword/ui/ForgotPassword")
// );
const ForgotPasswordSubmit = lazy(
  () => import("../../pages/ForgotPasswordSubmit/ForgotPasswordSubmit")
);
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));

// Core
const Forbidden = lazy(() => import("../../core/pages/Forbidden"));
const NotFound = lazy(() => import("../../core/pages/NotFound"));
const UnderConstructions = lazy(
  () => import("../../core/pages/UnderConstructions")
);

// Landing
const Landing = lazy(() => import("../../landing/pages/Landing"));

// Products
const UserManagement = lazy(() => import("../../pages/Products/Products"));

const AppRoutes = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Landing />} />
      <PrivateRoute path="admin" element={<AdminLayoutLazy />}>
        <PrivateRoute path="/" element={<HomeLazy />} />
        <PrivateRoute path="products" element={<UserManagement />} />
        <PrivateRoute path="faq" element={<FaqLazy />} />
        <PrivateRoute path="help" element={<HelpCenterLazy />} />
        <PrivateRoute path="profile" element={<ProfileLazy />}>
          <PrivateRoute path="/" element={<ProfileActivityLazy />} />
          <PrivateRoute
            path="information"
            element={<ProfileInformationLazy />}
          />
          <PrivateRoute path="password" element={<ProfilePasswordLazy />} />
        </PrivateRoute>
      </PrivateRoute>
      <Route path="forgot-password" element={<ForgotPasswordLazy />} />
      <Route path="forgot-password-submit" element={<ForgotPasswordSubmit />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="under-construction" element={<UnderConstructions />} />
      <Route path="403" element={<Forbidden />} />
      <Route path="404" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
