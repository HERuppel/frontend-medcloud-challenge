import { createTheme } from '@material-ui/core/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#bb2727',
    },
    secondary: {
      main: '#bb2727'
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
      hover: colors.isabelline,
      selected: colors.isabelline,
      focus: colors.isabelline,
      active: '#bb2727',

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
    allVariants: {
      color: '#bb2727'
    }
  }
});
