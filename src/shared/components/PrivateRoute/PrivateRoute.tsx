import { Navigate, Route, RouteProps } from "react-router";
import { useAppSelector } from "app/store";
import Loader from "../Loader/Loader";

type PrivateRouteProps = {
  requiredRole?: "admin" | "system-admin";
} & RouteProps;

const PrivateRoute = ({ requiredRole, ...routeProps }: PrivateRouteProps) => {
  const { isAuth, isLoading, isChecked, role } = useAppSelector((state) => state.authReducer);
  if (isLoading || !isChecked) {
    return <Loader />;
  }

  if (!isAuth || (requiredRole && role !== requiredRole)) {
    return <Navigate to={`/${process.env.PUBLIC_URL}/login`} />;
  }

  return <Route {...routeProps} />;
};

export default PrivateRoute;
