import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element, redirectTo = '/' }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return element;
  }

  return <Navigate to={redirectTo} replace />;
};

export default PublicRoute;
