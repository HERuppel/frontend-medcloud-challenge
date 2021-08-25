import { createTheme } from '@material-ui/core/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.verdiGris,
    },
    secondary: {
      main: colors.verdiGris
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
      selected: colors.isabelline,
      focus: colors.isabelline,
      active: colors.verdiGris,
      hover: colors.isabelline
    },
    common: {
      black: colors.blackOlive,
      white: colors.white
    },
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
