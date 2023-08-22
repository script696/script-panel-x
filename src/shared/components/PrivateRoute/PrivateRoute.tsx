import { Navigate, Route, RouteProps } from "react-router";
import { useAppSelector } from "../../../app/providers/StoreProvider";

type PrivateRouteProps = {
  roles?: string[];
} & RouteProps;

const PrivateRoute = ({
  children,
  roles,
  ...routeProps
}: PrivateRouteProps) => {
  const { isAuth, isLoading, isUserFetched } = useAppSelector(
    (state) => state.userReducer
  );

  if (isLoading || !isUserFetched) {
    return <div>Loading ...</div>;
  }

  if (isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={`/${process.env.PUBLIC_URL}/login`} />;
  }
};

export default PrivateRoute;
