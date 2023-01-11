import { useState, createContext, useContext } from 'react';

export const UserContext = createContext();

export const useUserAuthContext = () => useContext(UserContext);

const UserAuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);

  const logout = () => setIsAuth(false);

  return (
    <UserContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserAuthProvider;
