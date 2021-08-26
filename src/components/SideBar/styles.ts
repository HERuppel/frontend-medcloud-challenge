import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    navLink: {
      textDecoration: 'none',
      color: theme.palette.common.black,

      '&:hover': {
        background: theme.palette.action.hover,
        transition: '300ms'
      }
    },
    activeNavLink: {
      color: theme.palette.action.active,
      background: theme.palette.action.focus,
    },
    itemText: {
      marginLeft: 30
    }
  })
);

export default useStyles;

