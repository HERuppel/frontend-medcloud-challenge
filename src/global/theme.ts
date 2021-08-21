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
      hover: '#F0f',
      selected: '#F0F',
      activatedOpacity: .5,
      focus: '#f0f',
      active: '#f0f',
    },
    common: {
      black: colors.blackOlive,
      white: colors.isabelline
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(',')
  }
});
