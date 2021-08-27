import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '90%',
      height: '90%',
      borderWidth: .5,
      borderColor: theme.palette.action.selected,
      borderRadius: 5,
      alignSelf: 'center',
      background: theme.palette.action.selected,

      '& > *': {
        textAlign: 'justify'
      }
    },
    '@media (max-width: 1000px)': {
      container: {
        height: '100%'
      }
    },
    header: {
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      height: 30
    },
    title: {
      color: theme.palette.primary.main,
      paddingTop: theme.spacing(1),
      textAlign: 'center'
    },
    content: {
      borderRadius: 5,
      padding: theme.spacing(10)
    },
    firstContact: {
      paddingBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& span': {
        color: theme.palette.primary.main
      }
    },
    repos: {
      paddingTop: theme.spacing(3),
    },
    link: {
      textDecoration: 'none',
      transition: '200ms',

      '&:hover': {
        color: theme.palette.primary.dark
      }
    },
    functionalities: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.primary.main
    },
    checkList: {
      padding: theme.spacing(3)
    },
    itemCheck: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.primary.main,
      gap: 10
    }
  })
);

export default useStyles;
