import { createTheme, ThemeProvider } from '@mui/material';
import { useCallback } from 'react';
import { useState, createContext, useContext, useMemo } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  const toggleTheme = useCallback(
    () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    []
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
