import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/user/operations';
import { selectUserToken } from 'redux/user/selectors';
import { userActions } from 'redux/user/slice';

export default function useAuth() {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  const login = ({ email, password }) => {
    return dispatch(loginUser({ email, password }));
  };

  const logout = () => {
    dispatch(userActions.logout());
  };

  const isAuth = Boolean(token);

  return { isAuth, login, logout };
}
