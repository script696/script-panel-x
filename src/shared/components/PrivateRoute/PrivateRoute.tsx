import { Navigate, Route, RouteProps } from "react-router";
import { useAppSelector } from "app/store";
import Loader from "../Loader/Loader";
import { ROUTES_BASE } from "app/routing";

type PrivateRouteProps = {
  requiredRole?: "admin" | "system-admin";
} & RouteProps;

const PrivateRoute = ({ requiredRole, ...routeProps }: PrivateRouteProps) => {
  const { isAuth, isLoading, isChecked, role } = useAppSelector((state) => state.authReducer);

  /**
   * Если проверка авторизации еще в процессе показываем лоадер
   */
  if (isLoading || !isChecked) {
    return <Loader />;
  }

  /**
   * Если юзер не авторизован редиректим его на страницу логина
   */
  if (!isAuth) {
    return <Navigate to={`/${ROUTES_BASE.LOGIN}`} />;
  }

  /**
   * Если юзер пытается получить доступ к роуту который не относится к его роли, редиректим его на форбидден пейдж
   */
  if (requiredRole && role !== requiredRole) {
    return <Navigate to={`/${ROUTES_BASE.FORBIDDEN}`} />;
  }

  return <Route {...routeProps} />;
};

export default PrivateRoute;
