import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../global/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 250,
        flexShrink: 0,
      }
    },
    drawerPaper: {
      width: 250
    },
    header: {
      width: '100%',
      height: 70,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.blackOlive,
      color: colors.isabelline
    },
    navLink: {
      textDecoration: 'none',
      color: colors.blackOlive,
    },
    activeNavLink: {
      color: colors.blueSaphire,
    }
  })
);

export default useStyles;

