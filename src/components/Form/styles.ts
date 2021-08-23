import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { colors } from '../../global/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    form: {
      width: '100%',
      height: '100%',
    },
    input: {
      width: '80%',
      height: 30,
      maxWidth: '600px',
    },
    basicData: {
      backgroundColor: colors.paleSilver,

    },
    name: {
      display: 'flex',
      justifyContent: 'center'
    },
    pickers: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      placeItems: 'center',
      alignItems: 'center',
      padding: 50
    },
    button: {
      width: '70%',
      maxWidth: '900px',
      margin: '20px'
    },
    '@media (max-width: 1000px)': {
      input: { width: '90%' },
      button: { width: '90%' },
      handleErrorSuccess: { width: '90%' }
    },
    '@media (max-width: 600px)': {
      button: { margin: '10px' },
      form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
  })
);

export default useStyles;
