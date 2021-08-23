import { createTheme } from '@material-ui/core/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.blueSaphire,
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
      hover: colors.isabelline,
      selected: '#F0F',
      focus: '#f0f',
      active: colors.blueSaphire,

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
    ].join(',')
  }
});
