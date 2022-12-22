import { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const AppThemeProvider = ({ children }) => {
  const [themeLight, setThemeLight] = useState(false);

  const toggleTheme = () => setThemeLight(prev => !prev);

  return (
    <ThemeContext.Provider value={{ themeLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
