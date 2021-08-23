import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { colors } from '../../global/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '95%',
    },
    form: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: 50
    },
    input: {
      width: '80%',
      height: 30,
      maxWidth: '600px',
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: '2rem',
      position: 'absolute',
      top: 0,
      left: '5%',
    },
    basicData: {
      backgroundColor: colors.isabelline,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '50px 0',
      position: 'relative'
    },
    name: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      placeItems: 'center',
      width: '100%',
      paddingTop: 20
    },
    pickers: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      placeItems: 'center',
      padding: '40px 0 0 0',
      alignItems: 'start'
    },
    contactData: {
      backgroundColor: colors.isabelline,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '50px 0'
    },
    button: {
      width: '70%',
      maxWidth: '900px',
      margin: '20px',
      alignSelf: 'center'
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
