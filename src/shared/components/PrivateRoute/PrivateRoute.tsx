import { Navigate, Route, RouteProps } from "react-router";
import { useAuth } from "../../../app/providers/AuthProvider/AuthProvider";

type PrivateRouteProps = {
  roles?: string[];
} & RouteProps;

const PrivateRoute = ({
  children,
  roles,
  ...routeProps
}: PrivateRouteProps) => {
  const { hasRole, userInfo } = useAuth();

  if (true) {
    // if (!hasRole(roles)) {
    // return <Navigate to={`/${process.env.PUBLIC_URL}/403`} />;
    // }
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={`/${process.env.PUBLIC_URL}/login`} />;
  }
};

export default PrivateRoute;
