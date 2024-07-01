// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#61DAFB', // React logo blue
    },
    secondary: {
      main: '#0057A8', // Darker blue
    },
    background: {
      default: '#F0F4F8', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Custom font
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
