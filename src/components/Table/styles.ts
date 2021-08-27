import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    container: {
      width: '100%',
      minHeight: '80vh'
    },
    title: {
      fontWeight: 'bold',
    },
    tIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: theme.palette.primary.main,
    },
    box: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 30,

      '& span': {
        color: theme.palette.primary.dark,
        fontWeight: 'bold'
      }
    },
    personal: {

    },
    contact: {

    },
    medical: {
      paddingBottom: theme.spacing(5)
    },
    swal: {
      zIndex: 10000
    }
  })
);

export default useStyles;
