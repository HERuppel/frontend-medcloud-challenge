import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#009adf',
    },
    secondary: {
      main: '#002639'
    },
    error: {
      main: '#bb2727'
    },
    warning: {
      main: '#f0c400'
    },
    success: {
      main: '#16a735'
    },
    info: {
      main: '#2165e4'
    },
    action: {
      selected: '#EEE5E5',
      focus: '#EEE5E5',
      active: '#009adf',
      hover: '#EEE5E5'
    },
    common: {
      black: '#37392E',
      white: '#FFF'
    },
    text: {
      primary: '#202020'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0
        }
      }
    }
  }
});
