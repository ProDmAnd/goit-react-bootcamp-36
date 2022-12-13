import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: '#000',
          fontWeight: 700,
          fontSize: '1rem',
        },
        body2: {
          color: '#666',
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;
