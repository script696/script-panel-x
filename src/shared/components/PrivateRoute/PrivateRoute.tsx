import { Navigate, Route, RouteProps } from "react-router";
import { useAppSelector } from "../../../app/store";

type PrivateRouteProps = {
  roles?: string[];
} & RouteProps;

const PrivateRoute = ({
  children,
  roles,
  ...routeProps
}: PrivateRouteProps) => {
  const { isAuth, isLoading, isChecked } = useAppSelector(
    (state) => state.authReducer
  );
  const { isUserFetched } = useAppSelector((state) => state.userReducer);
  console.log(isAuth, isLoading, isUserFetched);

  if (isLoading || !isChecked) {
    return <div>Loading ...</div>;
  }

  if (isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={`/${process.env.PUBLIC_URL}/login`} />;
  }
};

export default PrivateRoute;
