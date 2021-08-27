import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '& > *': {
        margin: theme.spacing(1),
      },
      width: '90%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '3rem',
      textAlign: 'center',
      color: theme.palette.primary.main
    },
    '@media (max-width: 700px)': {
      title: {
        fontSize: '2.5rem'
      }
    }
  })
);

export default useStyles;
