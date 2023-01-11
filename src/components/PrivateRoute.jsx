import useAuth from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    return element;
  }

  return <Navigate to={redirectTo} replace state={{ from: location }} />;
};

export default PrivateRoute;
