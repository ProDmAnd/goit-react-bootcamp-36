import { useUserAuthContext } from 'contexts/UserAuthProvider';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const { isAuth } = useUserAuthContext();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <div>Profile</div>;
};

export default Profile;
